<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ContributionToUserRepository")
 */
class ContributionToUser
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="contributionToUsers")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\CompanyContribution", inversedBy="contributionToUsers")
     * @ORM\JoinColumn(nullable=false)
     */
    private $companyContribution;

    /**
     * @ORM\Column(type="integer")
     */
    private $userBudget;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getCompanyContribution(): ?CompanyContribution
    {
        return $this->companyContribution;
    }

    public function setCompanyContribution(?CompanyContribution $companyContribution): self
    {
        $this->companyContribution = $companyContribution;

        return $this;
    }

    public function getUserBudget(): ?int
    {
        return $this->userBudget;
    }

    public function setUserBudget(int $userBudget): self
    {
        $this->userBudget = $userBudget;

        return $this;
    }
}
