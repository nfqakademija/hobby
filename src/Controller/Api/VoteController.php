<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Serializer\FormErrorSerializer;
use App\Service\Voter;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations as Rest;

class VoteController extends AbstractFOSRestController
{
    /** @var FormErrorSerializer */
    private $formErrorSerializer;

    public function __construct(FormErrorSerializer $formErrorSerializer)
    {
        $this->formErrorSerializer = $formErrorSerializer;
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
//            $this->container->get('service.voter')->vote($data['hobby'], $data['amount'], $this->getUser());
            $voter = new Voter($this->getDoctrine()->getManager());
            $voter->vote($data['hobby'], $data['amount'], $this->getUser());

            return JsonResponse::create([], Response::HTTP_OK);
        } catch (\Throwable $exception) {
            return JsonResponse::create(['error' => $exception->getMessage()], Response::HTTP_SERVICE_UNAVAILABLE);
        }
    }
}
