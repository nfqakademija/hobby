<?php

namespace App\Repository;

use App\Entity\Hobby;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\Expr\Join;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Hobby|null find($id, $lockMode = null, $lockVersion = null)
 * @method Hobby|null findOneBy(array $criteria, array $orderBy = null)
 * @method Hobby[]    findAll()
 * @method Hobby[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class HobbyRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Hobby::class);
    }

    /**
     * @return array
     */
    public function getHobbies(): array
    {
        $qb = $this->createQueryBuilder('hobby');

        $qb
            ->select(
                'hobby',
                'votes'
            )
            ->innerJoin(
                'hobby.votes',
                'votes',
                Join::WITH,
                $qb->expr()->eq('votes.hobby', 'hobby.id')
            )
        ;

        return $qb->getQuery()->getArrayResult();
    }
}