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

        foreach ($this->getData() as $hobbyData) {
            $hobby->setTitle($hobbyData['title']);
            $hobby->setDescription($hobbyData['description']);
            $hobby->setEmail($hobbyData['email']);
            $hobby->setAmount($hobbyData['needToCollect']);
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
                'needToCollect' => 60
            ],
            [
                'title' => 'Kartingai',
                'description' => 'Smagus, Itraukiantis, Itraukiantis',
                'email' => 'vkarcikovas@gmail.com',
                'needToCollect' => 90
            ],
            [
                'title' => 'Krepsinis',
                'description' => 'Itraukiantis',
                'email' => 'mpetkevic@gmail.com',
                'needToCollect' => 15
            ],
            [
                'title' => 'Boulingas',
                'description' => 'Smagus',
                'email' => 'vkarcikovas@gmail.com',
                'needToCollect' => 30
            ],
        ];
    }
}
