<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\Hobby;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class HobbyData extends Fixture
{
    /**
     * @param ObjectManager $manager
     * @throws \Exception
     */
    public function load(ObjectManager $manager): void
    {
        $hobby = new Hobby();
        $titles = ['Tenisas', 'Kartingai', 'Krepsinis'];
        $descriptions = ['Smagus', 'Nuobodus', 'Itraukiantis'];
        $usernames = ['Ieva', 'Viktoras', 'Miroslav'];
        $email = ['istanynaite@nfq.lt', 'vkarcikovas@gmail.com', 'mpetkevic@gmail.com'];
        $amounts = [100, 99.99, 1.12];

        for ($i = 0; $i < 3; $i++) {
            $hobby->setTitle($titles[array_rand($titles)]);
            $hobby->setDescription($descriptions[array_rand($descriptions)]);
            $hobby->setUsername($usernames[array_rand($usernames)]);
            $hobby->setEmail($email[array_rand($email)]);
            $hobby->setAmount($amounts[array_rand($amounts)]);

            $manager->persist($hobby);
            $manager->flush();
            $manager->clear();
        }
    }
}
