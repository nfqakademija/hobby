<?php

declare(strict_types=1);

namespace App\Service;

use App\Entity\Hobby;
use App\Entity\User;
use App\Entity\Vote;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;

class Voter
{
    /** @var EntityManager */
    private $em;

    public function __construct(EntityManager $em)
    {
        $this->em = $em;
    }

    /**
     * @param int $hobbyId
     * @param string $userEmail
     * @param int $amount
     * @return string
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function vote(int $hobbyId, string $userEmail, int $amount): string
    {
        /** @var User $user */
        $user = $this->em->getRepository(User::class)->findOneBy(['email' => $userEmail]);

        if (false === $this->checkAmountAndUpdateUser($user, $amount)) {
            return 'Insufficient budget';
        }
        /** @var Hobby $hobby */
        $hobby = $this->em->getRepository(Hobby::class)->find($hobbyId);

        if (false === $this->updateHobbyAmount($hobby, $amount)) {
            return 'Insufficient budget';
        }

        /** @var Vote $vote */
        $vote = new Vote();

        $vote->setAmount($amount);
        $vote->setHobby($hobby);
        $vote->setUser($user);

        $this->em->persist($vote);
        $this->em->flush();

        //TODO returns should be modify
        return 'success';
    }

    /**
     * @param User $user
     * @param int $amount
     * @return bool
     * @throws ORMException
     * @throws OptimisticLockException
     */
    private function checkAmountAndUpdateUser(User $user, int $amount): bool
    {
        if ($amount > $user->getBudget()) {
            return false;
        }

        $user->setBudget($user->getBudget() - $amount);

        $this->em->persist($user);
        $this->em->flush();

        return true;
    }

    /**
     * @param Hobby $hobby
     * @param int $amount
     * @return bool
     * @throws ORMException
     * @throws OptimisticLockException
     */
    private function updateHobbyAmount(Hobby $hobby, int $amount): bool
    {
        if ($amount > $hobby->getAmount()) {
            return false;
        }

        $hobby->setAmount($hobby->getAmount() - $amount);

        $this->em->persist($hobby);
        $this->em->flush();

        return true;
    }
}
