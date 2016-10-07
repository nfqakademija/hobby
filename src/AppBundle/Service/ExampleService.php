<?php

namespace AppBundle\Service;

class ExampleService
{
    public function getPosts()
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
}