<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class AdminDashboardController extends AbstractController
{
    /**
     * @Route("/admin/dashboard", name="admin_dashboard")
     */



    public function profile(UrlGeneratorInterface $urlGenerator, UserInterface $user = null)
    {
        if ($user instanceof User) {
            return $this->render('admin_dashboard/index.html.twig', [
                'user' => $user,
                'userId' => $user->getId(),
                'roles' => $this->roleNames($user->getRoles()),
            ]);
        }
    }

    private function roleNames(array $userRoles)
    {
        foreach ($userRoles as $role) {
            yield str_replace('ROLE_', '', $role);
        }
    }


}
