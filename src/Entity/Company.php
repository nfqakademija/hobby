<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CompanyRepository")
 * @UniqueEntity(
 *     fields={"name"}
 * )
 */
class Company
{
    /**
     * @var int
     * @ORM\Id()
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(name="id", type="integer")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(type="string", length=255, unique=true)
     * @Assert\NotBlank()
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity="User", mappedBy="company")
     */
    protected $users;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\CompanyContribution", mappedBy="company")
     */
    private $companyContributions;

    public function __construct()
    {
        $this->companyContributions = new ArrayCollection();
    }

    /**
     * @return string
     */
    public function __toString(): string
    {
        return $this->getName();
    }

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     *
     * @return Company
     */
    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    /**
     * @return int
     */
    public function getBudget(): int
    {
        $budget = 0;
        if (false === empty($this->companyContributions)) {
            /** @var CompanyContribution $companyContribution */
            foreach ($this->companyContributions as $companyContribution) {
                $budget += $companyContribution->getBudget();
            }
        }

        return $budget;
    }

    /**
     * @return string|null
     */
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * @param string|null $name
     *
     * @return Company
     */
    public function setName(?string $name): Company
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getUsers()
    {
        return $this->users;
    }

    /**
     * @param User $user
     * @return Company
     */
    public function addUser(User $user)
    {
        $this->users[] = $user;

        return $this;
    }

    /**
     * @return Collection|CompanyContribution[]
     */
    public function getCompanyContributions(): Collection
    {
        return $this->companyContributions;
    }

    /**
     * @param CompanyContribution $companyContribution
     *
     * @return Company
     */
    public function addCompanyContribution(CompanyContribution $companyContribution): self
    {
        if (!$this->companyContributions->contains($companyContribution)) {
            $this->companyContributions[] = $companyContribution;
            $companyContribution->setCompany($this);
        }

        return $this;
    }

    /**
     * @param CompanyContribution $companyContribution
     *
     * @return Company
     */
    public function removeCompanyContribution(CompanyContribution $companyContribution): self
    {
        if ($this->companyContributions->contains($companyContribution)) {
            $this->companyContributions->removeElement($companyContribution);
            // set the owning side to null (unless already changed)
            if ($companyContribution->getCompany() === $this) {
                $companyContribution->setCompany(null);
            }
        }

        return $this;
    }

}
