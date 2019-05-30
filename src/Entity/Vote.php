<?php

namespace App\Entity;

use App\Entity\Traits\TimestampTrait;
use App\Utils\DateTimeUtils;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;

/**
 * @ORM\Entity(repositoryClass="App\Repository\VoteRepository")
 */
class Vote
{
    use TimestampTrait;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var Hobby|null
     * @ORM\ManyToOne(targetEntity="App\Entity\Hobby", inversedBy="votes", cascade={"persist"})
     * @JoinColumn(name="hobby", referencedColumnName="id")
     */
    private $hobby;

    /**
     * @var User|null
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="votes")
     */
    private $user;

    /**
     * @var integer
     * @ORM\Column(type="integer")
     */
    private $amount;

    /**
     * @throws \Exception
     */
    public function __construct()
    {
        $this->createdAt = DateTimeUtils::create();
    }

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Hobby|null
     */
    public function getHobby(): ?Hobby
    {
        return $this->hobby;
    }

    /**
     * @param Hobby|null $hobby
     *
     * @return Vote
     */
    public function setHobby(?Hobby $hobby): self
    {
        $this->hobby = $hobby;

        return $this;
    }

    /**
     * @return User|null
     */
    public function getUser(): ?User
    {
        return $this->user;
    }

    /**
     * @param User|null $user
     *
     * @return Vote
     */
    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return int
     */
    public function getAmount(): int
    {
        return $this->amount;
    }

    /**
     * @param int $amount
     *
     * @return Vote
     */
    public function setAmount(int $amount): Vote
    {
        $this->amount = $amount;

        return $this;
    }
}
