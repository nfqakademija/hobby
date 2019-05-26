<?php

declare(strict_types=1);


namespace App\DataFixtures;


use App\Entity\ContributionToUser;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;

class ContributionToUserFixtures extends Fixture implements DependentFixtureInterface
{
    /**
     * @param ObjectManager $manager
     * @throws \Exception
     */
    public function load(ObjectManager $manager): void
    {
        /** @var ContributionToUser $contributionToUser */
        $contributionToUser = new ContributionToUser();

        $contributionToUser
            ->setCompanyContribution($this->getReference(CompanyContributionFixtures::COMPANY_CONTRIBUTION))
            ->setUser($this->getReference(UserFixtures::USER));

        $manager->persist($contributionToUser);
        $manager->flush();
    }

    /**
     * @return array|void
     */
    public function getDependencies():array
    {
        return [
            CompanyContributionFixtures::class,
            UserFixtures::class
        ];
    }
}