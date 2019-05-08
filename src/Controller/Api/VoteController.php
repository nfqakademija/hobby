<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Service\Voter;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations as Rest;

class VoteController extends AbstractFOSRestController
{
    /**
     * @Rest\Post("/vote", name="vote")
     * @param Request $request
     * @return JsonResponse
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function voteAction(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $voter = new Voter($this->getDoctrine()->getManager());

        //TODO this if should be modify
        if ('success' !== $voter->vote($data['hobby'], $data['amount'], $this->getUser())) {
            return JsonResponse::create('insufficient budget', Response::HTTP_BAD_REQUEST);
        }

        return JsonResponse::create('', Response::HTTP_OK);
    }
}
