<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Entity\Vote;
use App\Serializer\FormErrorSerializer;
use App\Service\Voter;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class VoteController extends AbstractFOSRestController
{
    /** @var FormErrorSerializer */
    private $formErrorSerializer;

    /** @var Voter */
    private $voter;

    /**
     * @param FormErrorSerializer $formErrorSerializer
     * @param Voter $voter
     */
    public function __construct(FormErrorSerializer $formErrorSerializer, Voter $voter)
    {
        $this->formErrorSerializer = $formErrorSerializer;
        $this->voter = $voter;
    }

    /**
     * @Rest\Post("/vote", name="vote")
     * @param Request $request
     * @return JsonResponse
     */
    public function voteAction(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        try {
            $this->voter->vote($data['hobby'], $data['amount'], $this->getUser());

            return JsonResponse::create([], Response::HTTP_OK);
        } catch (\Throwable $exception) {
            return JsonResponse::create(['error' => $exception->getMessage()], Response::HTTP_SERVICE_UNAVAILABLE);
        }
    }

    /**
     * @Rest\Delete("/vote/{id}", name="remove_vote")
     * @ParamConverter("vote", class="App\Entity\Vote")
     * @param Vote $vote
     * @return JsonResponse
     */
    public function removeVoteAction(Vote $vote): JsonResponse
    {
        try {
            $em = $this->getDoctrine()->getManager();
            $voteRepository = $em->getRepository(Vote::class)->findOneBy(
                [
                    'user' => $this->getUser(),
                    'id' => $vote->getId()
                ]
            );

            if (null === $voteRepository) {
                throw new NotFoundHttpException('Vote was not found.');
            }

            $em->remove($voteRepository);
            $em->flush();
        } catch (\Throwable $exception) {
            throw new NotFoundHttpException('Vote does not exist.');
        }

        return JsonResponse::create([], Response::HTTP_OK);
    }
}
