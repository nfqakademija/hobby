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
     * @return array
     */
    public function getDependencies(): array
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
            $userFixture = self::USER;

            /** @var User $user */
            $user = new User();
            $user
                ->setCompany($this->getReference($userData['company']))
                ->setPassword(
                    $this->userPasswordEncoder->encodePassword($user, $userData['password'])
                )
                ->setEmail($userData['email'])
                ->setRoles($userData['role'])
                ->setRegistrationToken($userData['token'])
                ->setActive(true)
                ->setBudget(100); // todo add create_at

            $manager->persist($user);
            $this->setReference($userFixture, $user);
        }

        $manager->flush();
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
                'company' =>  CompanyFixtures::COMPANY,
                'active' => true
            ],
            [
                'email' => 'vkarcikovas@gmail.com',
                'role' => ['ROLE_USER'],
                'token' => '',
                'password' => 'manosargis',
                'company' =>  CompanyFixtures::COMPANY,
                'active' => true
            ],
            [
                'email' => 'mpetkevic@gmail.com',
                'role' => ['ROLE_USER', 'ROLE_ADMIN'],
                'token' => 'cHdazvsQ5VpbWfzZ',
                'password' => 'mpetkevic',
                'company' =>  CompanyFixtures::COMPANY1,
                'active' => true
            ],
            [
                'email' => 'justas@mikelevicius.com',
                'role' => ['ROLE_USER'],
                'token' => '5ge25Gj7uESpKM4d',
                'password' => 'justas',
                'company' =>  CompanyFixtures::COMPANY,
                'active' => false
            ],
            [
                'email' => 'arturas@paulauskas.com',
                'role' => ['ROLE_USER'],
                'token' => '5ge25Gj7uESpKM4d',
                'password' => 'Agne123',
                'company' =>  CompanyFixtures::COMPANY,
                'active' => false
            ],
            [
                'email' => 'Britney@Spears.com',
                'role' => ['ROLE_USER'],
                'token' => '5ge25Gj7uESpKM4d',
                'password' => 'Eminem',
                'company' =>  CompanyFixtures::COMPANY,
                'active' => false
            ],
            [
                'email' => 'lukas@zmogenas.com',
                'role' => ['ROLE_USER'],
                'token' => '5ge25Gj7uESpKM4d',
                'password' => 'zmogus',
                'company' =>  CompanyFixtures::COMPANY1,
                'active' => false
            ],
            [
                'email' => 'Dalia@Grybauskaite.com',
                'role' => ['ROLE_USER'],
                'token' => '5ge25Gj7uESpKM4d',
                'password' => 'Lietuva2019',
                'company' =>  CompanyFixtures::COMPANY1,
                'active' => false
            ],
            [
                'email' => 'Gitanas@Nauseda.com',
                'role' => ['ROLE_USER'],
                'token' => '5ge25Gj7uESpKM4d',
                'password' => 'ImBack',
                'company' =>  CompanyFixtures::COMPANY1,
                'active' => false
            ],
            [
                'email' => 'Saulius@svarkelis.com',
                'role' => ['ROLE_USER'],
                'token' => '5ge25Gj7uESpKM4d',
                'password' => 'Policija',
                'company' =>  CompanyFixtures::COMPANY1,
                'active' => false
            ],

        ];
    }
}
