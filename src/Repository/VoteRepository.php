<?php

namespace App\Repository;

use App\Entity\User;
use App\Entity\Vote;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\Expr\Join;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Vote|null find($id, $lockMode = null, $lockVersion = null)
 * @method Vote|null findOneBy(array $criteria, array $orderBy = null)
 * @method Vote[]    findAll()
 * @method Vote[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VoteRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Vote::class);
    }

    /**
     * @param User $user
     * @return array
     */
    public function getByUser(User $user): array
    {
        $qb = $this->createQueryBuilder('vote');

        $qb
            ->select(
                'hobby.title',
                'vote.id',
                'vote.amount'
            )
            ->innerJoin(
                'vote.user',
                'user',
                Join::WITH,
                $qb->expr()->eq('user.id', ':user')
            )
            ->innerJoin(
                'vote.hobby',
                'hobby'
            )
            ->setParameter('user', $user);

        return $qb->getQuery()->getArrayResult();
    }
}
