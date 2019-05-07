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

        $view = [
            'email' => $user->getEmail(),
            'budget' => $user->getBudget()
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
