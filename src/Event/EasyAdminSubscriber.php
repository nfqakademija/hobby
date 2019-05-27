<?php

declare(strict_types=1);

namespace App\Event;

use App\Entity\CompanyContribution;
use App\Entity\User;
use App\Service\UserBudget;
use Doctrine\ORM\EntityManager;
use EasyCorp\Bundle\EasyAdminBundle\Event\EasyAdminEvents;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\EventDispatcher\GenericEvent;

class EasyAdminSubscriber implements EventSubscriberInterface
{
    /** @var UserBudget */
    private $service;

    public function __construct(UserBudget $service)
    {
        $this->service = $service;
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
     */
    public function onPrePersist(GenericEvent $event)
    {
        $entity = $event->getSubject();
        if ($entity instanceof CompanyContribution) {
            $this->service->userBudget($entity->getId(), $entity->getCompany(), $entity->getBudget());

        }
    }
}