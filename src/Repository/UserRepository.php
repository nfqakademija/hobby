<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository
{
    /**
     * UserRepository constructor.
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, User::class);
    }

    /**
     * @param string $email
     * @param string $registrationToken
     * @return User|null
     * @throws NonUniqueResultException
     */
    public function findUserByEmailAndToken(string $email, string $registrationToken): ?User
    {
        $qb = $this->createQueryBuilder('user');

        $qb
            ->where(
                $qb->expr()->andX(
                    $qb->expr()->eq('user.email', ':email'),
                    $qb->expr()->eq('user.registrationToken', ':registrationToken')
                )
            )
            ->setParameters(['email' => $email, 'registrationToken' => $registrationToken]);

        return $qb->getQuery()->getOneOrNullResult();
    }

    /**
     * @param string $email
     * @return array
     * @throws NonUniqueResultException
     */
    public function findBudgetByUser(string $email): array
    {
        $qb = $this->createQueryBuilder('user');

        $qb
            ->select('user.budget')
            ->where($qb->expr()->eq('user.email', ':email'))
            ->setParameter('email', $email)
            ->getMaxResults();

        return $qb->getQuery()->getOneOrNullResult();
    }
}
