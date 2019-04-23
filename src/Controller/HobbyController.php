<?php

namespace App\Controller;

use App\Entity\Hobby;
use App\Form\Type\HobbyType;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use FOS\RestBundle\Controller\Annotations as Rest;

/**
 * Hobby Controller
 * @Route("/api", name="api_")
 */
class HobbyController extends AbstractFOSRestController
{
    /**
     * Lists all Hobbies.
     * @Rest\Get("/hobbies")
     *
     * @return Response
     */
    public function getMovieAction()
    {
        $repository = $this->getDoctrine()->getRepository(Hobby::class);
        $hobbies = $repository->findall();
        return $this->handleView($this->view($hobbies));
    }

    /**
     * Create Hobby.
     * @Rest\Post("/hobby")
     * @param Request $request
     *
     * @return Response
     */
    public function postMovieAction(Request $request)
    {
        $hobby = new Hobby();
        $response = new Response();
        $form = $this->createForm(HobbyType::class, $hobby);
        $data = json_decode($request->getContent(), true);
        $form->submit($data);
        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($hobby);
            $em->flush();

            return $response->setContent('');
        }
        return $response->setContent(Response::HTTP_BAD_REQUEST);
    }

}
