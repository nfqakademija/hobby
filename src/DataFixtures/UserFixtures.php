<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture implements DependentFixtureInterface
{
    public const USER = 'user';

    /** @var UserPasswordEncoderInterface $userPasswordEncoder */
    private $userPasswordEncoder;

    public function __construct(UserPasswordEncoderInterface $userPasswordEncoder)
    {
        $this->userPasswordEncoder = $userPasswordEncoder;
    }

    /**
     * @param ObjectManager $manager
     */
    public function load(ObjectManager $manager)
    {
        /** @var User $user */
        $user = new User();

        $user
            ->setCompany($this->getReference(CompanyFixtures::COMPANY))
            ->setPassword(
                $this->userPasswordEncoder->encodePassword($user, 'pass')
            )
            ->setEmail('a@a.com')
            ->setRoles(['ROLE_USER', 'ROLE_ADMIN'])
            ->setBudget(30); // todo add create_at


        $manager->persist($user);
        $manager->flush();

        $this->addReference(self::USER, $user);
    }

    /**
     * @return array|void
     */
    public function getDependencies():array
    {
        return [
            CompanyFixtures::class
        ];
    }
}
