<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Entity\Vote;
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
        $userVotes = $em->getRepository(Vote::class)->getByUser($this->getUser());

        return $this->handleView($this->view($userVotes));
    }
}
