<?php

namespace App\Controller\Api;

use App\Entity\User;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use Symfony\Component\HttpFoundation\JsonResponse;
use FOS\RestBundle\Controller\Annotations as Rest;

class SecurityController extends AbstractFOSRestController
{
    /**
     * @Rest\Post("/security/login", name="login")
     * @return JsonResponse
     */
    public function login(): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();
        $role = null;

        if (in_array('ROLE_ADMIN', $user->getRoles())) {
            $role = 1;
        } elseif (in_array('ROLE_USER', $user->getRoles())) {
            $role = 2;
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
