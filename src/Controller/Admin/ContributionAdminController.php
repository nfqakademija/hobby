<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Entity\User;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping\ClassMetadata;
use Doctrine\ORM\QueryBuilder as DoctrineQueryBuilder;

class ContributionAdminController extends BaseAdminController
{
    /**
     * {@inheritDoc}
     */
    protected function createListQueryBuilder(
        $entityConfig,
        $sortField = null,
        $sortDirection = null,
        $dqlFilter = null
    ) {
        /** @var User $user */
        $user = $this->get('security.token_storage')->getToken()->getUser();

        $currentCompany = $user->getCompany()->getId();

        /* @var EntityManager $em */
        $em = $this->getDoctrine()->getManagerForClass($entityConfig);
        /* @var ClassMetadata $classMetadata */
        $classMetadata = $em->getClassMetadata($entityConfig);

        /* @var DoctrineQueryBuilder $queryBuilder */
        $queryBuilder = $em->createQueryBuilder()
            ->select('entity')
            ->from($entityConfig, 'entity')
            ->where('entity.company = :company')
            ->setParameter('company', $currentCompany);

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
