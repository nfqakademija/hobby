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
     * @var int|null
     * @ORM\Column(type="integer", nullable=true)
     */
    private $userBudget;

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
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
     * @return ContributionToUser
     */
    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return CompanyContribution|null
     */
    public function getCompanyContribution(): ?CompanyContribution
    {
        return $this->companyContribution;
    }

    /**
     * @param CompanyContribution|null $companyContribution
     *
     * @return ContributionToUser
     */
    public function setCompanyContribution(?CompanyContribution $companyContribution): self
    {
        $this->companyContribution = $companyContribution;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getUserBudget(): ?int
    {
//        if (false === empty($this->companyContribution)) {
            //TODO:fix budget
//            /** @var CompanyContribution $companyContribution */
//            $companyContribution = $this->companyContribution;
//            $companyContribution->getBudget();
//
//            dd($companyContribution->getCompany());


//            /** @var ContributionToUser $contributionToUser */
//            foreach ($this->contributionToUsers as $contributionToUser) {
//                $this->budget += $contributionToUser->getUserBudget();
//            }
//        }

        return $this->userBudget;
    }

    /**
     * @param int|null $userBudget
     *
     * @return ContributionToUser
     */
    public function setUserBudget(?int $userBudget): ContributionToUser
    {
        $this->userBudget = $userBudget;

        return $this;
    }
}
