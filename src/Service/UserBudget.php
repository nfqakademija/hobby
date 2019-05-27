<?php

declare(strict_types=1);

namespace App\Service;

use App\Entity\Company;
use App\Entity\Contribution;
use App\Entity\User;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;

class UserBudget
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
     * @param Contribution $contribution
     * @param Company $company
     * @param int $budget
     * @throws NonUniqueResultException
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function userBudget(Contribution $contribution, Company $company, int $budget): void
    {
        $userCount = $this->em->getRepository(Contribution::class)->getUserCountByCompany(
            $contribution->getId(),
            $company
        );

        $amount = $budget / $userCount;

        /** @var User $user */
        foreach ($company->getUsers() as $user) {
            $contribution->addUser($user);
            $user->setBudget($user->getBudget() + $amount);
        }

        $this->em->flush();
    }
}
