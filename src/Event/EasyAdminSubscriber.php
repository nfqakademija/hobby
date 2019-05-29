<?php

declare(strict_types=1);

namespace App\Event;

use App\Entity\Contribution;
use App\Entity\User;
use App\Service\UserBudget;
use EasyCorp\Bundle\EasyAdminBundle\Event\EasyAdminEvents;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\EventDispatcher\GenericEvent;

class EasyAdminSubscriber implements EventSubscriberInterface
{
    /** @var UserBudget */
    private $userBudget;

    /**
     * @param UserBudget $userBudget
     */
    public function __construct(UserBudget $userBudget)
    {
        $this->userBudget = $userBudget;
    }

    /**
     * @return array
     */
    public static function getSubscribedEvents(): array
    {
        return [
            EasyAdminEvents::POST_PERSIST => 'onPrePersist',
        ];
    }

    /**
     * @param GenericEvent $event
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function onPrePersist(GenericEvent $event): void
    {
        $entity = $event->getSubject();
        if ($entity instanceof Contribution) {
            $this->userBudget->userBudget($entity, $entity->getCompany(), $entity->getAmount());
        }

        if ($entity instanceof User) {
//            $this->
        }
    }
}
