<?php

declare(strict_types=1);

namespace App\Service;

use App\Entity\Company;
use App\Entity\CompanyContribution;
use App\Entity\User;
use Doctrine\ORM\EntityManager;

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
     * @param int $companyContributionId
     * @param Company $company
     * @param int $budget
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function userBudget(int $companyContributionId, Company $company, int $budget): void
    {
        $userCount = $this->em->getRepository(CompanyContribution::class)->getUserCountByCompany(
            $companyContributionId,
            $company
        );

        /** @var User $user */
        foreach ($company->getUsers() as $user) {
            dd($user);
        }

    }
}