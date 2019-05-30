<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Entity\User;
use App\Entity\Vote;
use Doctrine\ORM\NonUniqueResultException;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations as Rest;

class UserController extends AbstractFOSRestController
{
    /**
     * @Rest\Get("/user/votes", name="get_user_votes")
     * @return JsonResponse
     */
    public function userVoteAction(): Response
    {
        $em = $this->getDoctrine()->getManager();
        $userVotes = $em->getRepository(Vote::class)->getVotesByUser($this->getUser());

        return $this->handleView($this->view($userVotes));
    }

    /**
     * @Rest\Get("/user/wallet", name="get_user_budget")
     * @return Response
     * @throws NonUniqueResultException
     */
    public function checkUserBudget(): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        $em = $this->getDoctrine()->getManager();
        $userBudget = $em->getRepository(User::class)->findBudgetByUser($user->getEmail());

        return JsonResponse::create($userBudget);
    }
}
