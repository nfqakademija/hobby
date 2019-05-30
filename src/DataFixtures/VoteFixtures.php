<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\Vote;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;

class VoteFixtures extends Fixture implements DependentFixtureInterface
{
    public function getDependencies()
    {
        return array(
            UserFixtures::class,
        );
    }

    /**
     * @dataProvider getData
     * @param ObjectManager $manager
     * @throws \Exception
     */
    public function load(ObjectManager $manager): void
    {
        $vote = new Vote();

        foreach ($this->getData() as $votedata) {
            $vote->setUser($this->getReference(UserFixtures::USER));
            $vote->setAmount($votedata['amount']);
            $vote->setHobby($this->getReference($votedata['hobby']));
            $manager->persist($vote);
            $manager->flush();
            $manager->clear();
        }
    }

    /**
     * @return array
     */
    public function getData(): array
    {
        return [
            [
                'hobby' => HobbyFixtures::HOBBY,
                'amount' => 50,
            ],
            [
                'hobby' => HobbyFixtures::HOBBY1,
                'amount' => 59,
            ],
            [
                'hobby' => HobbyFixtures::HOBBY2,
                'amount' => 135,
            ],
            [
                'hobby' => HobbyFixtures::HOBBY3,
                'amount' => 170,
            ],
            [
                'hobby' => HobbyFixtures::HOBBY4,
                'amount' => 5090,
            ],
            [
                'hobby' => HobbyFixtures::HOBBY5,
                'amount' => 9000,
            ],
            [
                'hobby' => HobbyFixtures::HOBBY6,
                'amount' => 58000,
            ],
            [
                'hobby' => HobbyFixtures::HOBBY7,
                'amount' => 590,
            ],
            [
                'hobby' => HobbyFixtures::HOBBY8,
                'amount' => 70,
            ],
            [
                'hobby' => HobbyFixtures::HOBBY9,
                'amount' => 590,
            ],
            [
                'hobby' => HobbyFixtures::HOBBY10,
                'amount' => 3900,
            ],
            [
                'hobby' => HobbyFixtures::HOBBY11,
                'amount' => 590,
            ],
            [
                'hobby' => HobbyFixtures::HOBBY12,
                'amount' => 1200,
            ],
            [
                'hobby' => HobbyFixtures::HOBBY13,
                'amount' => 2400,
            ],
            [
                'hobby' => HobbyFixtures::HOBBY14,
                'amount' => 5900,
            ],
            [
                'hobby' => HobbyFixtures::HOBBY15,
                'amount' => 350,
            ],
            [
                'hobby' => HobbyFixtures::HOBBY16,
                'amount' => 7,
            ],
            [
                'hobby' => HobbyFixtures::HOBBY17,
                'amount' => 130,
            ],
            [
                'hobby' => HobbyFixtures::HOBBY18,
                'amount' => 10,
            ],
            [
                'hobby' => HobbyFixtures::HOBBY19,
                'amount' => 500,
            ],
        ];
    }
}
