<?php

namespace App\Entity;

use App\Entity\Traits\TimestampTrait;
use App\Utils\DateTimeUtils;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CompanyContributionRepository")
 */
class CompanyContribution
{
    use TimestampTrait;

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
     * @ORM\OneToMany(targetEntity="App\Entity\ContributionToUser", mappedBy="companyContribution", orphanRemoval=true)
     */
    private $contributionToUsers;

    /**
     * @return string
     */
    public function __toString(): string
    {
        return $this->getCompany();
    }


    public function __construct()
    {
        $this->contributionToUsers = new ArrayCollection();
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
     * @return Company|null
     */
    public function getCompany(): ?Company
    {
        return $this->company;
    }

    /**
     * @param Company|null $company
     *
     * @return CompanyContribution
     */
    public function setCompany(?Company $company): self
    {
        $this->company = $company;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getBudget(): ?int
    {
        return $this->budget;
    }

    /**
     * @param int $budget
     *
     * @return CompanyContribution
     */
    public function setBudget(int $budget): self
    {
        $this->budget = $budget;

        return $this;
    }

    /**
     * @return Collection|ContributionToUser[]
     */
    public function getContributionToUsers(): Collection
    {
        return $this->contributionToUsers;
    }

    /**
     * @param ContributionToUser $contributionToUser
     *
     * @return CompanyContribution
     */
    public function addContributionToUser(ContributionToUser $contributionToUser): self
    {
        if (!$this->contributionToUsers->contains($contributionToUser)) {
            $this->contributionToUsers[] = $contributionToUser;
            $contributionToUser->setCompanyContribution($this);
        }

        return $this;
    }

    /**
     * @param ContributionToUser $contributionToUser
     *
     * @return CompanyContribution
     */
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
