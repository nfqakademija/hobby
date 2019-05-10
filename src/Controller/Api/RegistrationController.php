<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Serializer\FormErrorSerializer;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use FOS\RestBundle\Serializer\Normalizer\FormErrorHandler;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;

class RegistrationController extends AbstractFOSRestController
{
    /** @var TokenStorageInterface */
    private $tokenStorageInterface;

    /** @var FormErrorSerializer */
    private $formErrorSerializer;

    public function __construct(FormErrorSerializer $formErrorSerializer, TokenStorageInterface $tokenStorageInterface)
    {
        $this->formErrorSerializer = $formErrorSerializer;
        $this->tokenStorageInterface = $tokenStorageInterface;
    }

    /**
     * @Rest\Post("/security/register", name="register")
     * @param Request $request
     * @param UserPasswordEncoderInterface $passwordEncoder
     * @return Response
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $data = json_decode($request->getContent(), true);
        $form->submit($data);

        if ($form->isSubmitted() && $form->isValid()) {
            $user->setPassword(
                $passwordEncoder->encodePassword(
                    $user,
                    $form->get('password')->getData()
                )
            );

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            $this->authenticateUser($user);

            $view = [
                'email' => $user->getEmail(),
                'budget' => $user->getBudget()
            ];

            return JsonResponse::create($view, Response::HTTP_OK);
        }

        return JsonResponse::create(['errors' => $this->formErrorSerializer->convertFormToArray($form)], Response::HTTP_UNAVAILABLE_FOR_LEGAL_REASONS);
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
