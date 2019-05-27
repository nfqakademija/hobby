<?php

namespace App\Repository;

use App\Entity\Company;
use App\Entity\Contribution;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\Query\Expr\Join;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Contribution|null find($id, $lockMode = null, $lockVersion = null)
 * @method Contribution|null findOneBy(array $criteria, array $orderBy = null)
 * @method Contribution[]    findAll()
 * @method Contribution[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ContributionRepository extends ServiceEntityRepository
{
    /**
     * CompanyContributionRepository constructor.
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Contribution::class);
    }

    /**
     * @param int $contribution
     * @param Company $company
     * @return int
     * @throws NonUniqueResultException
     */
    public function getUserCountByCompany(int $contribution, Company $company): int
    {
        $qb = $this->createQueryBuilder('contribution');

        $qb
            ->leftJoin(
                'contribution.company',
                'company',
                Join::WITH,
                $qb->expr()->eq('company', ':company')
            )
            ->leftJoin(
                'company.users',
                'users'
            )
            ->where($qb->expr()->eq('contribution.id', ':contributionId'))
            ->select('COUNT(users) as userCount')
            ->setParameters(
                [
                    'company' => $company,
                    'contributionId' => $contribution
                ]
            );

        return $qb->getQuery()->getSingleScalarResult();
    }
}
