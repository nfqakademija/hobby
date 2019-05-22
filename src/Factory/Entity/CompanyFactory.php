<?php

declare(strict_types=1);

namespace App\Factory\Entity;

use App\Entity\Company;

class CompanyFactory
{
    public static function create(int $budget, string $name): Company
    {
        $company = new Company();
        $company
            ->setBudget($budget)
            ->setName($name);

        return $company;
    }
}
