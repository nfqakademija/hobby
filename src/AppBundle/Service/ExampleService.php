<?php

namespace AppBundle\Service;

use Doctrine\ORM\EntityManager;

class ExampleService
{
    /**
     * @var EntityManager
     */
    private $em;

    public function __construct($em)
    {
        $this->em = $em;
    }

    /**
     * Get dummy posts
     *
     * @return array
     */
    public function getDummyPosts()
    {
        return [
            [
                'title' => 'Sample title 1',
                'content' => 'ola ola'
            ],
            [
                'title' => 'Sample title 2',
                'content' => 'la la'
            ]
        ];
    }

    /**
     * Get posts from db
     *
     * @return \AppBundle\Entity\Post[]|array
     */
    public function getPostsFromDb()
    {
        $repository = $this->em->getRepository('AppBundle:Post');
        $posts = $repository->findAll();

        return $posts;
    }
}