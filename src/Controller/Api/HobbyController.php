<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Entity\Hobby;
use App\Form\Type\HobbyType;
use App\Repository\HobbyRepository;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations as Rest;

class HobbyController extends AbstractFOSRestController
{
    /**
     * Lists all Hobbies.
     * @Rest\Get("/hobbies", name="get_hobbies")
     *
     * @return Response
     */
    public function showHobbiesAction(): Response
    {
        /** @var HobbyRepository $repository */
        $repository = $this->getDoctrine()->getRepository(Hobby::class);
        $hobbies = $repository->getHobbies();

        return $this->handleView($this->view($hobbies));
    }

    /**
     * Create Hobby.
     * @Rest\Post("/hobby", name="post_hobby")
     * @param Request $request
     *
     * @return Response
     */
    public function createHobbyAction(Request $request): Response
    {
        $hobby = new Hobby();
        $form = $this->createForm(HobbyType::class, $hobby);
        $data = json_decode($request->getContent(), true);
        $form->submit($data);
        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($hobby);
            $em->flush();

            return $this->handleView($this->view([], Response::HTTP_CREATED));
        }

        return $this->handleView($this->view($form->getErrors()));
    }
}
