<?php

namespace App\DataFixtures;

use App\Entity\UserRegistration;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class UserData extends Fixture
{
    /**
     * @param ObjectManager $manager
     * @throws \Exception
     */
    public function load(ObjectManager $manager): void
    {
        $user = new UserRegistration();
        $username = ['Lukas', 'Ieva', 'Miroslav'];
        $email = ['istanynaite@nfq.lt', 'vkarcikovas@gmail.com', 'mpetkevic@gmail.com'];
        $password = ['123', '123', '1234'];
        $salt = ['','',''];
        $role = ['','',''];
        $cash = [30,30,30];

        for ($i = 0; $i < 3; $i++) {
            $user->setUsername($username[array_rand($username)]);
            $user->setEmail($email[array_rand($email)]);
            $user->setPassword($password[array_rand($password)]);
            $user->setSalt($salt[array_rand($salt)]);
            $user->setRole($role[array_rand($role)]);
            $user->setCash($cash[array_rand($cash)]);

            $manager->persist($user);
            $manager->flush();
            $manager->clear();
        }
    }
}
