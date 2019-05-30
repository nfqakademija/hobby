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
    public const USER1 = 'user1';

    public const USER = 'user';

    /** @var UserPasswordEncoderInterface $userPasswordEncoder */
    private $userPasswordEncoder;

    /**
     * @param UserPasswordEncoderInterface $userPasswordEncoder
     */
    public function __construct(UserPasswordEncoderInterface $userPasswordEncoder)
    {
        $this->userPasswordEncoder = $userPasswordEncoder;
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

    /**
     * @param ObjectManager $manager
     */
    public function load(ObjectManager $manager): void
    {
        $usersData = $this->getData();

        foreach ($usersData as $userData) {
            $companyFixture = CompanyFixtures::COMPANY1;
            $userFixture = self::USER;
            if ($userData['email'] === 'istanynaite@nfq.lt') {
                $companyFixture = CompanyFixtures::COMPANY;
                $userFixture = self::USER1;
            }

            /** @var User $user */
            $user = new User();
            $user
                ->setCompany($this->getReference($companyFixture))
                ->setPassword(
                    $this->userPasswordEncoder->encodePassword($user, $userData['password'])
                )
                ->setEmail($userData['email'])
                ->setRoles($userData['role'])
                ->setRegistrationToken($userData['token'])
                ->setActive(true)
                ->setBudget(0); // todo add create_at

            $manager->persist($user);
        }

        $manager->flush();

        $this->addReference($userFixture, $user);
    }

    /**
     * @return array
     */
    public function getData(): array
    {
        return [
            [
                'email' => 'istanynaite@nfq.lt',
                'role' => ['ROLE_USER', 'ROLE_ADMIN'],
                'token' => 'zfypnCDEh9ZhHZPX',
                'password' => 'sargis',
                'active' => true
            ],
            [
                'email' => 'vkarcikovas@gmail.com',
                'role' => ['ROLE_USER'],
                'token' => '',
                'password' => 'manosargis',
                'active' => true
            ],
            [
                'email' => 'mpetkevic@gmail.com',
                'role' => ['ROLE_USER', 'ROLE_ADMIN'],
                'token' => 'cHdazvsQ5VpbWfzZ',
                'password' => 'mpetkevic',
                'active' => true
            ],
            [
                'email' => 'a@a.com',
                'role' => ['ROLE_USER'],
                'token' => '5ge25Gj7uESpKM4d',
                'password' => 'viktoras',
                'active' => false
            ],
        ];
    }
}
