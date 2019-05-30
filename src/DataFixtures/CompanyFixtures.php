<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\Company;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class CompanyFixtures extends Fixture
{
    public const COMPANY = 'company';

    public const COMPANY1 = 'company1';

    /**
     * @param ObjectManager $manager
     * @throws \Exception
     */
    public function load(ObjectManager $manager): void
    {
        $companyFixtures = [
            ["IT Sprendimai", self::COMPANY],
            ["TECH Sprendimai", self::COMPANY1]
        ];

        foreach ($companyFixtures as $companyFixture) {
            /** @var Company $company */
            $company = new Company();

            $company
                ->setName($companyFixture[0]);

            $manager->persist($company);
            $manager->flush();

            $this->addReference($companyFixture[1], $company);
        }
    }

}
