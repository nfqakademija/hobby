<?php

namespace App\Repository;

use App\Entity\Company;
use App\Entity\ContributionToUser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\Expr\Join;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method ContributionToUser|null find($id, $lockMode = null, $lockVersion = null)
 * @method ContributionToUser|null findOneBy(array $criteria, array $orderBy = null)
 * @method ContributionToUser[]    findAll()
 * @method ContributionToUser[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ContributionToUserRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, ContributionToUser::class);
    }

    /**
     * @param Company $company
     *
     * @return array
     */
    public function getUserByCompany(Company $company): array
    {
        $qb = $this->createQueryBuilder('contributionToUser');

        $qb
            ->innerJoin(
                'contributionToUser.user',
                'user',
                Join::WITH,
                $qb->expr()->eq('user.company', ':company')
            )
            ->setParameter('company', $company);

        return $qb->getQuery()->getArrayResult();
    }
}
