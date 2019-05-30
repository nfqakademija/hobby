<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Entity\User;
use App\Serializer\FormErrorSerializer;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use Symfony\Component\HttpFoundation\JsonResponse;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\Response;

class SecurityController extends AbstractFOSRestController
{
    /** @var FormErrorSerializer */
    private $formErrorSerializer;

    /**
     * @param FormErrorSerializer $formErrorSerializer
     */
    public function __construct(FormErrorSerializer $formErrorSerializer)
    {
        $this->formErrorSerializer = $formErrorSerializer;
    }

    /**
     * @Rest\Post("/security/login", name="login")
     * @return JsonResponse
     */
    public function login(): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();

        if (in_array('ROLE_ADMIN', $user->getRoles())) {
            $role = 1;
        } elseif (in_array('ROLE_USER', $user->getRoles())) {
            $role = 2;
        } else {
            $role = null;
        }

        if (null === $role || false === $user->isActive()) {
            return JsonResponse::create(
                [
                    'errors' => 'User does not exist'
                ],
                Response::HTTP_NOT_FOUND
            );
        }

        $view = [
            'email' => $user->getEmail(),
            'budget' => $user->getBudget(),
            'role' => $role
        ];

        return JsonResponse::create($view);
    }

    /**
     * @Rest\Get("/security/logout", name="logout")
     * @return void
     * @throws \RuntimeException
     */
    public function logout(): void
    {
        throw new \RuntimeException('This should not be reached!');
    }
}
