<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class PostController extends Controller
{
    /**
     * @Route("/list")
     */
    public function listAction()
    {
        return $this->render('AppBundle:Post:list.html.twig', array(
            // ...
        ));
    }

    /**
     * @Route("/show/{id}")
     */
    public function showAction($id)
    {
        return $this->render('AppBundle:Post:show.html.twig', array(
            // ...
        ));
    }

}
