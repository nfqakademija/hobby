<?php

namespace App\Controller\Api;

use App\Entity\UserRegistration;
use App\Form\Type\UserType;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use FOS\RestBundle\Controller\Annotations as Rest;


class UserRegistrationController extends AbstractFOSRestController
{
    /**
     * Lists all Users.
     * @Rest\Get("/users")
     *
     * @return Response
     */

    public function getMovieAction()
    {
        $repository = $this->getDoctrine()->getRepository(UserRegistration::class);
        $users = $repository->findall();
        return $this->handleView($this->view($users));
    }

    /**
     * Create User.
     * @Rest\Post("/user")
     * @param Request $request
     *
     * @return Response
     */
    public function postMovieAction(Request $request)
    {
    $user = new UserRegistration();
    $form = $this->createForm(UserType::class, $user);
    $data = json_decode($request->getContent(), true);
    $form->submit($data);
    if ($form->isSubmitted() && $form->isValid()) {
        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        return $this->handleView($this->view([], Response::HTTP_CREATED));
    }
    return $this->handleView($this->view($form->getErrors()));
    }
}
