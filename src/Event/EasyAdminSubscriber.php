<?php

declare(strict_types=1);

namespace App\Event;

use App\Entity\CompanyContribution;
use App\Entity\Contribution;
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
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function onPrePersist(GenericEvent $event)
    {
        $entity = $event->getSubject();
        if ($entity instanceof Contribution) {
            $this->service->userBudget($entity, $entity->getCompany(), $entity->getAmount());
        }
    }
}
