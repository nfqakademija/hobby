<?php

namespace App\Controller\Api;

use FOS\RestBundle\Controller\AbstractFOSRestController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use FOS\RestBundle\Controller\Annotations as Rest;

class SecurityController extends AbstractFOSRestController
{
    /**
     * @Rest\Post("/security/login", name="login")
     * @param Request $request
     * @param AuthenticationUtils $utils
     * @return JsonResponse
     */
    public function login(Request $request, AuthenticationUtils $utils): JsonResponse
    {
        $user = $this->getUser();

        $view = [
            'username' => $user->getUsername(),
            'roles' => $user->getRoles()
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
