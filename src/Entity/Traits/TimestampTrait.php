<?php

declare(strict_types=1);

namespace App\Entity\Traits;

use Gedmo\Mapping\Annotation as Gedmo;
use JMS\Serializer\Annotation as Serializer;
use JMS\Serializer\Annotation\Exclude;

trait TimestampTrait
{
    /**
     * @var \DateTimeInterface
     * @Exclude()
     * @Gedmo\Timestampable(on="create")
     * @ORM\Column(type="datetime")
     */
    protected $createdAt;

    /**
     * @return \DateTimeInterface
     */
    public function getCreatedAt(): \DateTimeInterface
    {
        return $this->createdAt;
    }

    /**
     * @param \DateTimeInterface $created_at
     */
    public function setCreatedAt(\DateTimeInterface $created_at): void
    {
        $this->createdAt = $created_at;
    }
}
