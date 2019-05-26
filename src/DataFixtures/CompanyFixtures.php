<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\Company;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class CompanyFixtures extends Fixture
{

    /**
     * @param ObjectManager $manager
     * @throws \Exception
     */
    public function load(ObjectManager $manager): void
    {
        $company = new Company();
        $company
            ->setName('CompanyB')
            ->setBudget(1500);

        $manager->persist($company);
        $manager->flush();
    }
}
