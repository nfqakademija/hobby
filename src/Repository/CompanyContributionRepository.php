<?php

namespace App\Repository;

use App\Entity\Company;
use App\Entity\CompanyContribution;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\Expr\Join;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method CompanyContribution|null find($id, $lockMode = null, $lockVersion = null)
 * @method CompanyContribution|null findOneBy(array $criteria, array $orderBy = null)
 * @method CompanyContribution[]    findAll()
 * @method CompanyContribution[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CompanyContributionRepository extends ServiceEntityRepository
{
    /**
     * CompanyContributionRepository constructor.
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, CompanyContribution::class);
    }

    /**
     * @param int $companyContributionId
     * @param Company $company
     * @return int
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function getUserCountByCompany(int $companyContributionId, Company $company): int
    {
        $qb = $this->createQueryBuilder('companyContribution');

        $qb
            ->leftJoin(
                'companyContribution.company',
                'company',
                Join::WITH,
                $qb->expr()->eq('company', ':company')
            )
            ->leftJoin(
                'company.users',
                'users'
            )
            ->where($qb->expr()->eq('companyContribution.id', ':companyContributionId'))
            ->select('COUNT(users) as userCount')
            ->setParameters(
                [
                    'company' => $company,
                    'companyContributionId' => $companyContributionId
                ]
            );

        return $qb->getQuery()->getSingleScalarResult();
    }
}
