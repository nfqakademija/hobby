<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\Company;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;

class CompanyFixtures extends Fixture
{
    public const COMPANY = 'company';

    /**
     * @param ObjectManager $manager
     * @throws \Exception
     */
    public function load(ObjectManager $manager): void
    {
        /** @var Company $company */
        $company = new Company();

        $company
            ->setName('CompanyA');

        $manager->persist($company);
        $manager->flush();

        $this->addReference(self::COMPANY, $company);
    }
}
