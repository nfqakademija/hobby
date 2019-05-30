<?php

declare(strict_types=1);

namespace App\Event;

use App\Entity\Contribution;
use App\Entity\User;
use App\Service\UserBudget;
use App\Service\UserRegisterByEmail;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use EasyCorp\Bundle\EasyAdminBundle\Event\EasyAdminEvents;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\EventDispatcher\GenericEvent;
use Symfony\Component\Security\Core\Security;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class EasyAdminSubscriber implements EventSubscriberInterface
{
    /** @var UserBudget */
    private $userBudget;

    /** @var UserRegisterByEmail */
    private $userRegisterByEmail;

    /** @var Security */
    private $security;

    /**
     * @param UserBudget $userBudget
     * @param UserRegisterByEmail $userRegisterByEmail
     * @param Security $security
     */
    public function __construct(
        UserBudget $userBudget,
        UserRegisterByEmail $userRegisterByEmail,
        Security $security
    ) {
        $this->userBudget = $userBudget;
        $this->userRegisterByEmail = $userRegisterByEmail;
        $this->security = $security;
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
     * @throws NonUniqueResultException
     * @throws ORMException
     * @throws OptimisticLockException
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function onPrePersist(GenericEvent $event): void
    {
        $entity = $event->getSubject();
        if ($entity instanceof Contribution) {
            $this->userBudget->userBudget($entity, $entity->getCompany(), $entity->getAmount());
        }

        if ($entity instanceof User) {
            /** @var User $companyAdministrator */
            $companyAdministrator = $this->security->getUser();
            $this->userRegisterByEmail->sendRegistrationToEmail($entity, $companyAdministrator);
        }
    }
}
