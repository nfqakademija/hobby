<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\Company;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
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
        $company = new Company();
        $company
            ->setName('CompanyA')
            ->setBudget(1500);

        $manager->persist($company);

        $user = new User();
        $user
            ->setCompany($company)
            ->setPassword(
                $this->userPasswordEncoder->encodePassword($user, 'pass')
            )
            ->setEmail('a@a.com')
            ->setRoles(['ROLE_USER','ROLE_ADMIN'])
            ->setBudget(30)
        ; // todo add create_at

        $manager->persist($user);

        $manager->flush();
    }
}
