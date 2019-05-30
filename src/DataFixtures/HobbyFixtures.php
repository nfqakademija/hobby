<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\Hobby;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class HobbyFixtures extends Fixture
{
    public const HOBBY = 'hobby';
    public const HOBBY1 = 'hobby1';
    public const HOBBY2 = 'hobby2';
    public const HOBBY3 = 'hobby3';
    public const HOBBY4 = 'hobby4';
    public const HOBBY5 = 'hobby5';
    public const HOBBY6 = 'hobby6';
    public const HOBBY7 = 'hobby7';
    public const HOBBY8 = 'hobby8';
    public const HOBBY9 = 'hobby9';
    public const HOBBY10 = 'hobby10';
    public const HOBBY11 = 'hobby11';
    public const HOBBY12 = 'hobby12';
    public const HOBBY13 = 'hobby13';
    public const HOBBY14 = 'hobby14';
    public const HOBBY15 = 'hobby15';
    public const HOBBY16 = 'hobby16';
    public const HOBBY17 = 'hobby17';
    public const HOBBY18 = 'hobby18';
    public const HOBBY19 = 'hobby19';

    /**
     * @dataProvider getData
     * @param ObjectManager $manager
     * @throws \Exception
     */
    public function load(ObjectManager $manager): void
    {
        foreach ($this->getData() as $hobbyData) {
            $hobby = new Hobby();

            $hobby->setTitle($hobbyData['title']);
            $hobby->setDescription($hobbyData['description']);
            $hobby->setEmail($hobbyData['email']);
            $hobby->setAmount($hobbyData['needToCollect']);
            $manager->persist($hobby);

            $manager->flush();

            $manager->clear();

            $this->addReference($hobbyData['hobby'], $hobby);
        }
    }

    /**
     * @return array
     */
    public function getData(): array
    {
        return [
            [
                'title' => 'Tennis tournament',
                'description' => 'I would love to organize tennis tournament with my colleagues',
                'email' => 'istanynaite@nfq.lt',
                'needToCollect' => 60,
                'hobby' => self::HOBBY
            ],
            [
                'title' => 'Movie night in the cinema',
                'description' => 'It would be great to spend a lovely evening at cinema with my favourite people',
                'email' => 'istanynaite@nfq.lt',
                'needToCollect' => 200,
                'hobby' => self::HOBBY1
            ],
            [
                'title' => 'Evening at the Basketball court',
                'description' => 'The summer is almost here and it would be great to practise shooting skills',
                'email' => 'vkarcikovas@gmail.com',
                'needToCollect' => 150,
                'hobby' => self::HOBBY2
            ],
            [
                'title' => 'Kayaking',
                'description' => 'Lets make great trip down the river!',
                'email' => 'vkarcikovas@gmail.com',
                'needToCollect' => 300,
                'hobby' => self::HOBBY3
            ],
            [
                'title' => 'Work Trip To Australia',
                'description' => 'I think we deserve this as a team!',
                'email' => 'mpetkevic@gmail.com',
                'needToCollect' => 30000,
                'hobby' => self::HOBBY4
            ],
            [
                'title' => 'Pizza party',
                'description' => 'So hungry, lets buy 100 pizzas!!!! YUM YUM',
                'email' => 'mpetkevic@gmail.com',
                'needToCollect' => 10000,
                'hobby' => self::HOBBY5
            ],
            [
                'title' => 'Lets make America Great Again!',
                'description' => 'Yes Guys, lets go to the White House and Tell Trump He is great President',
                'email' => 'justas@mikelevicius.com',
                'needToCollect' => 100000,
                'hobby' => self::HOBBY6
            ],
            [
                'title' => 'Donation for Kids',
                'description' => 'Lets donate some money for kids charity!',
                'email' => 'justas@mikelevicius.com',
                'needToCollect' => 10000,
                'hobby' => self::HOBBY7
            ],
            [
                'title' => 'Bowling night',
                'description' => 'Spend evening at bowling club',
                'email' => 'arturas@paulauskas.com',
                'needToCollect' => 300,
                'hobby' => self::HOBBY8
            ],
            [
                'title' => 'Trip to Ibiza',
                'description' => 'Lets have a blast at Ibiza night clubs!',
                'email' => 'arturas@paulauskas.com',
                'needToCollect' => 600,
                'hobby' => self::HOBBY9
            ],
            [
                'title' => 'Ladies Night in SPA',
                'description' => 'Maybe this way we will be able to hire more girls',
                'email' => 'Britney@Spears.com',
                'needToCollect' => 6000,
                'hobby' => self::HOBBY10
            ],
            [
                'title' => 'Buy more Coffee!',
                'description' => 'Behind every successful programmer is a substantial amount of Coffee',
                'email' => 'Britney@Spears.com',
                'needToCollect' => 900,
                'hobby' => self::HOBBY11
            ],
            [
                'title' => 'Cooking courses for beginners!',
                'description' => 'Programmers also need to eat ;)',
                'email' => 'lukas@zmogenas.com',
                'needToCollect' => 1500,
                'hobby' => self::HOBBY12
            ],
            [
                'title' => 'Whisky degustation',
                'description' => 'Lets get drunk in a fancy way guys',
                'email' => 'lukas@zmogenas.com',
                'needToCollect' => 3000,
                'hobby' => self::HOBBY13
            ],
            [
                'title' => 'Beer degustation',
                'description' => 'Lets get drunker',
                'email' => 'Dalia@Grybauskaite.com',
                'needToCollect' => 6000,
                'hobby' => self::HOBBY14
            ],
            [
                'title' => 'Cartings',
                'description' => 'Lets race in the small cars!',
                'email' => 'Dalia@Grybauskaite.com',
                'needToCollect' => 600,
                'hobby' => self::HOBBY15
            ],
            [
                'title' => 'Travel to Moon!',
                'description' => 'Its really not that far! ;)',
                'email' => 'Gitanas@Nauseda.com',
                'needToCollect' => 9,
                'hobby' => self::HOBBY16
            ],
            [
                'title' => 'Lets learn how to code',
                'description' => 'Its time to learn something old',
                'email' => 'Saulius@svarkelis.com',
                'needToCollect' => 150,
                'hobby' => self::HOBBY17
            ],
            [
                'title' => 'Travel by air Balloon',
                'description' => 'Lets travel to that Mars!',
                'email' => 'vkarcikovas@gmail.com',
                'needToCollect' => 30,
                'hobby' => self::HOBBY18
            ],
            [
                'title' => 'Briney Spears concert',
                'description' => 'Just DO IT !! RIGHT NOW!!!',
                'email' => 'istanynaite@nfq.lt',
                'needToCollect' => 600,
                'hobby' => self::HOBBY19
            ],
        ];
    }
}
