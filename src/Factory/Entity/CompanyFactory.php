<?php

declare(strict_types=1);

namespace App\Factory\Entity;

use App\Entity\Company;
use Doctrine\ORM\ORMException;

class CompanyFactory
{
    /**
     * @param string $name
     * @return Company
     * @throws ORMException
     */
    public static function create(string $name): Company
    {
        try {
            $company = new Company();

            $company->setName($name);

            return $company;
        } catch (\Throwable $exception) {
            throw new ORMException($exception);
        }
    }
}
