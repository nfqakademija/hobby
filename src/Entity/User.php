<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @ORM\Table(name="user")
 * @UniqueEntity(
 *     fields={"email"}
 * )
 */
class User implements UserInterface, \Serializable
{
    /**
     * @var int|null
     * @ORM\Id()
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer", nullable=true)
     */
    private $id;

    /**
     * @var string|null
     * @ORM\Column(name="email", type="string", unique=true, nullable=true)
     * @Assert\NotBlank()
     * @Assert\Email()
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $password;

    /**
     * @var array
     * @ORM\Column(name="roles", type="array")
     */
    private $roles;

    /**
     * @var int|null
     * @ORM\Column(name="budget", type="integer", nullable=true)
     */
    private $budget;

    /**
     * @var Company
     * @ORM\ManyToOne(targetEntity="Company", inversedBy="id", cascade={"persist"})
     * @ORM\JoinColumn(name="company_id", referencedColumnName="id")
     */
    private $company;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Vote", mappedBy="user")
     */
    private $votes;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Contribution", mappedBy="user")
     */
    private $contributions;

    /**
     * @var string
     */
    private $registrationToken;

    public function __construct()
    {
        $this->roles = ['ROLE_USER'];
        $this->votes = new ArrayCollection();
        $this->contributions = new ArrayCollection();
    }

    /**
     * @return string
     */
    public function __toString(): string
    {
        return $this->getUsername();
    }

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @param int|null $id
     *
     * @return User
     */
    public function setId(?int $id): self
    {
        $this->id = $id;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getEmail(): ?string
    {
        return $this->email;
    }

    /**
     * @param string|null $email
     *
     * @return User
     */
    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * @param string|null
     *
     * @return User
     */
    public function getUsername(): ?string
    {
        return $this->email;
    }

    /**
     * @return mixed
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @param mixed $password
     *
     * @return User
     */
    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getRoles()
    {
        return $this->roles;
    }

    /**
     * @param array $roles
     *
     * @return User
     */
    public function setRoles(array $roles): User
    {
        $this->roles = $roles;

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
     * @param int|null $budget
     *
     * @return User
     */
    public function setBudget(?int $budget): self
    {
        $this->budget = $budget;

        return $this;
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
     * @return User
     */
    public function setCompany(?Company $company): User
    {
        $this->company = $company;

        return $this;
    }

    /**
     * @return string|void
     */
    public function serialize()
    {
        return serialize([
            $this->id,
            $this->email,
            $this->password,
        ]);
    }

    /**
     * @param string $serialized
     */
    public function unserialize($serialized)
    {
        list (
            $this->id,
            $this->email,
            $this->password,
            ) = unserialize($serialized);
    }

    /**
     * @return string|null The salt
     */
    public function getSalt()
    {
    }

    /**
     * @return void
     */
    public function eraseCredentials(): void
    {
    }

    /**
     * @return Collection|Vote[]
     */
    public function getVotes(): Collection
    {
        return $this->votes;
    }

    /**
     * @param Vote $vote
     *
     * @return User
     */
    public function addVote(Vote $vote): self
    {
        if (!$this->votes->contains($vote)) {
            $this->votes[] = $vote;
            $vote->setUser($this);
        }

        return $this;
    }

    /**
     * @param Vote $vote
     *
     * @return User
     */
    public function removeVote(Vote $vote): self
    {
        if ($this->votes->contains($vote)) {
            $this->votes->removeElement($vote);
            // set the owning side to null (unless already changed)
            if ($vote->getUser() === $this) {
                $vote->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Contribution[]
     */
    public function getContributions(): Collection
    {
        return $this->contributions;
    }

    /**
     * @param Contribution $contribution
     *
     * @return User
     */
    public function addContribution(Contribution $contribution): self
    {
        if (!$this->contributions->contains($contribution)) {
            $this->contributions[] = $contribution;
            $contribution->addUser($this);
        }

        return $this;
    }

    /**
     * @param Contribution $contribution
     *
     * @return User
     */
    public function removeContribution(Contribution $contribution): self
    {
        if ($this->contributions->contains($contribution)) {
            $this->contributions->removeElement($contribution);
            $contribution->removeUser($this);
        }

        return $this;
    }

    /**
     * @return string
     */
    public function getRegistrationToken(): string
    {
        return $this->registrationToken;
    }

    /**
     * @param string $registrationToken
     *
     * @return User
     */
    public function setRegistrationToken(string $registrationToken): self
    {
        $this->registrationToken = $registrationToken;

        return $this;
    }
}
