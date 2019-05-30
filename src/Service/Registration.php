<?php

declare(strict_types=1);

namespace App\Service;

use App\Entity\User;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\ORMException;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class Registration
{
    private const STARTER_PACK = 0;

    /** @var EntityManager */
    private $em;

    /** @var UserPasswordEncoderInterface */
    private $passwordEncoder;

    /**
     * @param EntityManager $em
     * @param UserPasswordEncoderInterface $passwordEncoder
     */
    public function __construct(EntityManager $em, UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->em = $em;
        $this->passwordEncoder = $passwordEncoder;
    }

    /**
     * @param User $user
     * @param string $password
     * @throws ORMException
     */
    public function activateUser(User $user, string $password): void
    {
        try {
            $user->setPassword(
                $this->passwordEncoder->encodePassword(
                    $user,
                    $password
                )
            );

            $user->setActive(true);
            $user->setBudget(self::STARTER_PACK);
            $user->removeRegistrationToken();

            $this->em->persist($user);
            $this->em->flush();
        } catch (\Throwable $exception) {
            if ($exception instanceof ORMException) {
                throw new ORMException($exception);
            }

            throw new $exception;
        }
    }
}
