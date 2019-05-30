<?php

declare(strict_types=1);

namespace App\Factory\Entity;

use App\Entity\Company;
use App\Entity\User;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFactory
{
    /**
     * @param UserPasswordEncoderInterface $encoder
     * @param Company $company
     * @param string $email
     * @param int $budget
     * @param array $role
     * @param string $plainPassword
     * @return User
     */
    public static function create(
        UserPasswordEncoderInterface $encoder,
        Company $company,
        string $email,
        int $budget,
        array $role,
        string $plainPassword
    ): User {

        $user = new User();
        $user
            ->setCompany($company)
            ->setEmail($email)
            ->setBudget($budget)
            ->setRoles($role)
            ->setActive(true)
            ->setRegistrationToken('');

        $user->setPassword(
            $encoder->encodePassword(
                $user,
                $plainPassword
            )
        );

        return $user;
    }
}
