<?php

namespace App\Repository;

use App\Entity\ContributionToUser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method ContributionToUser|null find($id, $lockMode = null, $lockVersion = null)
 * @method ContributionToUser|null findOneBy(array $criteria, array $orderBy = null)
 * @method ContributionToUser[]    findAll()
 * @method ContributionToUser[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ContributionToUserRepository extends ServiceEntityRepository
{
    /**
     * ContributionToUserRepository constructor.
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, ContributionToUser::class);
    }
}
