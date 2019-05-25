<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CompanyContributionRepository")
 */
class CompanyContribution
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Company", inversedBy="companyContributions")
     * @ORM\JoinColumn(nullable=false)
     */
    private $company;

    /**
     * @ORM\Column(type="integer")
     */
    private $budget;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created_at;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ContributionToUser", mappedBy="companyContribution", orphanRemoval=true)
     */
    private $contributionToUsers;

    public function __construct()
    {
        $this->contributionToUsers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCompany(): ?Company
    {
        return $this->company;
    }

    public function setCompany(?Company $company): self
    {
        $this->company = $company;

        return $this;
    }

    public function getBudget(): ?int
    {
        return $this->budget;
    }

    public function setBudget(int $budget): self
    {
        $this->budget = $budget;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    /**
     * @return Collection|ContributionToUser[]
     */
    public function getContributionToUsers(): Collection
    {
        return $this->contributionToUsers;
    }

    public function addContributionToUser(ContributionToUser $contributionToUser): self
    {
        if (!$this->contributionToUsers->contains($contributionToUser)) {
            $this->contributionToUsers[] = $contributionToUser;
            $contributionToUser->setCompanyContribution($this);
        }

        return $this;
    }

    public function removeContributionToUser(ContributionToUser $contributionToUser): self
    {
        if ($this->contributionToUsers->contains($contributionToUser)) {
            $this->contributionToUsers->removeElement($contributionToUser);
            // set the owning side to null (unless already changed)
            if ($contributionToUser->getCompanyContribution() === $this) {
                $contributionToUser->setCompanyContribution(null);
            }
        }

        return $this;
    }
}
