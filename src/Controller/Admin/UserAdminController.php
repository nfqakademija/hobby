<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Entity\User;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping\ClassMetadata;
use Doctrine\ORM\QueryBuilder as DoctrineQueryBuilder;
use EasyCorp\Bundle\EasyAdminBundle\Controller\EasyAdminController;

class UserAdminController extends EasyAdminController
{
    /**
     * {@inheritDoc}
     */
    public function createListQueryBuilder($entityConfig, $sortField = null, $sortDirection = null, $dqlFilter = null)
    {
        /** @var User $user */
        $user = $this->get('security.token_storage')->getToken()->getUser();

        //TODO:found golden spot
        $currentCompany = $user->getCompany()->getName();


        /* @var EntityManager $em */
        $em = $this->getDoctrine()->getManagerForClass($entityConfig);
        /* @var ClassMetadata $classMetadata */
        $classMetadata = $em->getClassMetadata($entityConfig);

        /* @var DoctrineQueryBuilder $queryBuilder */
        $queryBuilder = $em->createQueryBuilder()
            ->select('entity')
            ->from($entityConfig, 'entity')
        ;

        $isSortedByDoctrineAssociation = $this->isDoctrineAssociation($classMetadata, $sortField);
        if ($isSortedByDoctrineAssociation) {
            $sortFieldParts = \explode('.', $sortField);
            $queryBuilder->leftJoin('entity.'.$sortFieldParts[0], $sortFieldParts[0]);
        }

        if (!empty($dqlFilter)) {
            $queryBuilder->andWhere($dqlFilter);
        }

//        if (null !== $sortField) {
//            $queryBuilder->orderBy(\sprintf('%s%s', $isSortedByDoctrineAssociation ? '' : 'entity.', $sortField), $sortDirection);
//        }
//        dd($queryBuilder);

        return $queryBuilder;
    }

    /**
     * {@inheritDoc}
     */
    protected function isDoctrineAssociation(ClassMetadata $classMetadata, $fieldName)
    {
        if (null === $fieldName) {
            return false;
        }

        $fieldNameParts = \explode('.', $fieldName);

        return false !== \strpos($fieldName, '.') && !\array_key_exists($fieldNameParts[0], $classMetadata->embeddedClasses);
    }
}
