<?php

declare(strict_types=1);


namespace App\DataFixtures;


use App\Entity\CompanyContribution;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;

class CompanyContributionFixtures extends Fixture implements DependentFixtureInterface
{
    public const COMPANY_CONTRIBUTION = 'company-contribution';

    /**
     * @param ObjectManager $manager
     * @throws \Exception
     */
    public function load(ObjectManager $manager): void
    {
        /** @var CompanyContribution $companyContribution */
        $companyContribution = new CompanyContribution();

        $companyContribution
            ->setBudget(1500)
            ->setCompany($this->getReference(CompanyFixtures::COMPANY));

        $manager->persist($companyContribution);
        $manager->flush();

        $this->addReference(self::COMPANY_CONTRIBUTION, $companyContribution);
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