<?php

declare(strict_types=1);

namespace App\Factory\Entity;

use App\Entity\Company;

class CompanyFactory
{
    /**
     * @param string $name
     * @return Company
     * @throws \Exception
     */
    public static function create(string $name): Company
    {
        $company = new Company();

        $company->setName($name);

        return $company;
    }
}
