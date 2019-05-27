<?php

namespace App\Entity;

use App\Entity\Traits\TimestampTrait;
use App\Utils\DateTimeUtils;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ContributionRepository")
 */
class Contribution
{
    use TimestampTrait;
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Company", inversedBy="contributions")
     * @ORM\JoinColumn(nullable=false)
     */
    private $company;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\User", inversedBy="contributions")
     */
    private $user;

    /**
     * @ORM\Column(type="integer")
     */
    private $amount;

    /**
     * @throws \Exception
     */
    public function __construct()
    {
        $this->user = new ArrayCollection();
        $this->createdAt = DateTimeUtils::create();
    }

    /**
     * @return string
     */
    public function __toString(): string
    {
        return $this->getCompany();
    }

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Company|null
     */
    public function getCompany(): ?Company
    {
        return $this->company;
    }

    /**
     * @param Company|null $company
     *
     * @return Contribution
     */
    public function setCompany(?Company $company): self
    {
        $this->company = $company;

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getUser(): Collection
    {
        return $this->user;
    }

    /**
     * @param User $user
     *
     * @return Contribution
     */
    public function addUser(User $user): self
    {
        if (!$this->user->contains($user)) {
            $this->user[] = $user;
        }

        return $this;
    }

    /**
     * @param User $user
     *
     * @return Contribution
     */
    public function removeUser(User $user): self
    {
        if ($this->user->contains($user)) {
            $this->user->removeElement($user);
        }

        return $this;
    }

    /**
     * @return int|null
     */
    public function getAmount(): ?int
    {
        return $this->amount;
    }

    /**
     * @param int $amount
     *
     * @return Contribution
     */
    public function setAmount(int $amount): self
    {
        $this->amount = $amount;

        return $this;
    }
}
