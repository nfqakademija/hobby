<?php

declare(strict_types=1);

namespace App\Entity\Traits;

class TimestampTrait
{
    /**
     * @var \DateTimeInterface
     * @ORM\Column(name="created_at", type="datetime")
     */
    protected $created_at;

    /**
     * @return \DateTimeInterface
     */
    public function getCreatedAt(): \DateTimeInterface
    {
        return $this->created_at;
    }

    /**
     * @param \DateTimeInterface $created_at
     */
    public function setCreatedAt(\DateTimeInterface $created_at): void
    {
        $this->created_at = $created_at;
    }
}
