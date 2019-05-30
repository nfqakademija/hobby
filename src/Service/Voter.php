<?php

declare(strict_types=1);

namespace App\Service;

use App\Entity\Hobby;
use App\Entity\User;
use App\Factory\Entity\VoteFactory;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class Voter
{
    /** @var EntityManager */
    private $em;

    /**
     * @param EntityManager $em
     */
    public function __construct(EntityManager $em)
    {
        $this->em = $em;
    }

    /**
     * @param int $hobbyId
     * @param int $amount
     * @param User $user
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function vote(int $hobbyId, int $amount, User $user): void
    {
        if (false === $this->checkAmountAndUpdateUser($user, $amount) || 0 > $amount) {
            throw new NotFoundHttpException('Insufficient budget');
        }

        if (null === $this->em->getRepository(Hobby::class)->find($hobbyId)) {
            throw new NotFoundHttpException('This hobby does not exist');
        }

        /** @var Hobby $hobby */
        $hobby = $this->em->getRepository(Hobby::class)->find($hobbyId);

//        if (false === $this->updateHobbyAmount($hobby, $amount) || null === $hobby) {
        if (null === $hobby) {
            throw new NotFoundHttpException('Insufficient budget');
        }

        $vote = VoteFactory::create($amount, $hobby, $user);

        $this->em->persist($vote);
        $this->em->flush();
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
}
