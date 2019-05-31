<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Serializer\FormErrorSerializer;
use App\Service\Registration;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\ORMException;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use FOS\RestBundle\Controller\Annotations as Rest;

class RegistrationController extends AbstractFOSRestController
{

    /** @var TokenStorageInterface */
    private $tokenStorageInterface;

    /** @var FormErrorSerializer */
    private $formErrorSerializer;

    /** @var Registration */
    private $registrationService;

    public function __construct(
        TokenStorageInterface $tokenStorageInterface,
        FormErrorSerializer $formErrorSerializer,
        Registration $registrationService
    ) {
        $this->tokenStorageInterface = $tokenStorageInterface;
        $this->formErrorSerializer = $formErrorSerializer;
        $this->registrationService = $registrationService;
    }

    /**
     * @Rest\Post("/security/register", name="register")
     * @param Request $request
     * @return Response
     * @throws NonUniqueResultException
     * @throws ORMException
     */
    public function register(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);

        $user = $this->getDoctrine()->getManager()->getRepository(User::class)->findUserByEmailAndToken(
            $data['email'],
            $data['registrationToken']
        );

        if (null !== $user) {
            $form = $this->createForm(RegistrationFormType::class, $user);
            $form->submit(['password' => $data['password']]);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->registrationService->activateUser($user, $form->get('password')->getData());
                $this->authenticateUser($user);

                $view = [
                    'email' => $user->getEmail(),
                    'budget' => $user->getBudget()
                ];

                return JsonResponse::create($view);
            }
            return JsonResponse::create(
                [
                    'errors' => $this->formErrorSerializer->convertFormToArray($form)
                ],
                Response::HTTP_UNAVAILABLE_FOR_LEGAL_REASONS
            );
        }
        return JsonResponse::create(
            [
                'errors' => 'User does not exist.'
            ],
            Response::HTTP_NOT_FOUND
        );
    }

    /**
     * @param User $user
     * @return void
     */
    private function authenticateUser(User $user): void
    {
        $providerKey = 'main';
        $token = new UsernamePasswordToken($user, null, $providerKey, $user->getRoles());

        $this->tokenStorageInterface->setToken($token);
    }
}
