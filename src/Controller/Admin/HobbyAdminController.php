<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Entity\User;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping\ClassMetadata;
use Doctrine\ORM\QueryBuilder as DoctrineQueryBuilder;

class HobbyAdminController extends BaseAdminController
{
    /**
     * {@inheritDoc}
     */
    public function createListQueryBuilder($entityConfig, $sortField = null, $sortDirection = null, $dqlFilter = null)
    {
        /** @var User $user */
        $user = $this->get('security.token_storage')->getToken()->getUser();

        //TODO:found golden spot
        $users = $user->getCompany()->getUsers();

        $usersEmails = [];

        foreach ($users as $user) {
            $usersEmails[] = $user->getEmail();
        }
        /* @var EntityManager $em */
        $em = $this->getDoctrine()->getManagerForClass($entityConfig);
        /* @var ClassMetadata $classMetadata */
        $classMetadata = $em->getClassMetadata($entityConfig);

        /* @var DoctrineQueryBuilder $queryBuilder */
        $queryBuilder = $em->createQueryBuilder()
            ->select('entity')
            ->from($entityConfig, 'entity')
            ->where('entity.email IN (:users)')
            ->setParameter('users', $usersEmails)
        ;

        $isSortedByDoctrineAssociation = $this->isDoctrineAssociation($classMetadata, $sortField);
        if ($isSortedByDoctrineAssociation) {
            $sortFieldParts = \explode('.', $sortField);
            $queryBuilder->leftJoin('entity.'.$sortFieldParts[0], $sortFieldParts[0]);
        }

        if (!empty($dqlFilter)) {
            $queryBuilder->andWhere($dqlFilter);
        }

        return $queryBuilder;
    }
}
