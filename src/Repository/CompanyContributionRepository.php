<?php

namespace App\Repository;

use App\Entity\CompanyContribution;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method CompanyContribution|null find($id, $lockMode = null, $lockVersion = null)
 * @method CompanyContribution|null findOneBy(array $criteria, array $orderBy = null)
 * @method CompanyContribution[]    findAll()
 * @method CompanyContribution[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CompanyContributionRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, CompanyContribution::class);
    }
}
