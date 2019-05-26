<?php

declare(strict_types=1);


namespace App\Factory\Entity;


use App\Entity\Hobby;
use App\Entity\User;
use App\Entity\Vote;

class VoteFactory
{
    /**
     * @param int $budget
     * @param Hobby $hobby
     * @param User $user
     * @return Vote
     */
    public static function create(int $budget, Hobby $hobby, User $user): Vote
    {
        /** @var Vote $vote */
        $vote = new Vote();

        $vote
            ->setAmount($budget)
            ->setHobby($hobby)
            ->setUser($user);

        return $vote;
    }
}