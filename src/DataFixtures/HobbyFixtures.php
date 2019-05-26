<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\Hobby;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class HobbyFixtures extends Fixture
{
    public const HOBBY = 'hobby';

    /**
     * @dataProvider getData
     * @param ObjectManager $manager
     * @throws \Exception
     */
    public function load(ObjectManager $manager): void
    {
        $hobby = new Hobby();
        $titles = ['Tenisas', 'Kartingai', 'Krepsinis'];
        $descriptions = ['Smagus', 'Nuobodus', 'Itraukiantis'];
        $email = ['istanynaite@nfq.lt', 'vkarcikovas@gmail.com', 'mpetkevic@gmail.com'];
        $amount = [90, 60, 30];

        for ($i = 0; $i < 3; $i++) {
            $hobby->setTitle($titles[array_rand($titles)]);
            $hobby->setDescription($descriptions[array_rand($descriptions)]);
            $hobby->setEmail($email[array_rand($email)]);
            $hobby->setAmount($amount[array_rand($amount)]);

            $manager->persist($hobby);
            $manager->flush();
            $manager->clear();
        }

        $this->addReference(self::HOBBY, $hobby);
    }

    /**
     * @return array
     */
    public function getData(): array
    {
        return [
            [
                'title' => 'Tenisas',
                'description' => 'Smagus, Itraukiantis',
                'email' => 'istanynaite@nfq.lt',
                'needToCollect' => '60'
            ],
            [
                'title' => 'Kartingai',
                'description' => 'Smagus, Itraukiantis, Itraukiantis',
                'email' => 'vkarcikovas@gmail.com',
                'needToCollect' => '90'
            ],
            [
                'title' => 'Krepsinis',
                'description' => 'Itraukiantis',
                'email' => 'mpetkevic@gmail.com',
                'needToCollect' => '15'
            ],
            [
                'title' => 'Boulingas',
                'description' => 'Smagus',
                'email' => 'vkarcikovas@gmail.com',
                'needToCollect' => '30'
            ],
        ];
    }
}
