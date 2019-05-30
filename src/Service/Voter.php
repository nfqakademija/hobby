<?php

declare(strict_types=1);

namespace App\Service;

use App\Entity\Hobby;
use App\Entity\User;
use App\Factory\Entity\VoteFactory;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\ORMException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class Voter
{
    private const NEGATIVE_AMOUTN = 0;

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
     */
    public function vote(int $hobbyId, int $amount, User $user): void
    {
        if (false === $this->checkAmountAndUpdateUser($user, $amount) || self::NEGATIVE_AMOUTN > $amount) {
            throw new NotFoundHttpException('Insufficient budget');
        }

        if (null === $this->em->getRepository(Hobby::class)->find($hobbyId)) {
            throw new NotFoundHttpException('This hobby does not exist');
        }

        /** @var Hobby $hobby */
        $hobby = $this->em->getRepository(Hobby::class)->find($hobbyId);

        if (null === $hobby) {
            throw new NotFoundHttpException('Insufficient budget');
        }

        try {
            $vote = VoteFactory::create($amount, $hobby, $user);

            $this->em->persist($vote);
            $this->em->flush();
        } catch (\Throwable $exception) {
            if ($exception instanceof ORMException) {
                throw new ORMException($exception);
            }

            throw new $exception;
        }
    }

    /**
     * @param User $user
     * @param int $amount
     * @return bool
     * @throws ORMException
     */
    private function checkAmountAndUpdateUser(User $user, int $amount): bool
    {
        if ($amount > $user->getBudget()) {
            return false;
        }

        try {
            $user->setBudget($user->getBudget() - $amount);

            $this->em->persist($user);
            $this->em->flush();

            return true;
        } catch (\Throwable $exception) {
            if ($exception instanceof ORMException) {
                throw new ORMException($exception);
            }

            throw new $exception;
        }
    }
}
