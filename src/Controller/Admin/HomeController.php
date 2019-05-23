<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Entity\User;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping\ClassMetadata;
use Doctrine\ORM\QueryBuilder as DoctrineQueryBuilder;
use EasyCorp\Bundle\EasyAdminBundle\Controller\EasyAdminController;

class HomeController extends EasyAdminController
{
//    /**
//     * {@inheritdoc}
//     *
//     * @throws MissingSearchAssociationException
//     */
//    protected function createSearchQueryBuilder($entityClass, $searchQuery, array $searchableFields, $sortField = null, $sortDirection = null, $dqlFilter = null)
//    {
//        $queryBuilder = $this->get('easyadmin.query_builder')->createSearchQueryBuilder($this->entity, $searchQuery, $sortField, $sortDirection, $dqlFilter);
//        $lowerSearchQuery = mb_strtolower($searchQuery);
//
//        $queryParameters = [];
//        foreach ($this->entity['search']['fields'] as $name => $metadata) {
//            if ('association' === $metadata['dataType']) {
//                if (false === array_key_exists('searchField', $metadata)) {
//                    throw new MissingSearchAssociationException($this->entity['name'], $name);
//                }
//
//                // Join the associated entity and search on the given field
//                $searchFields = $metadata['searchField'];
//                $queryBuilder->join(sprintf('entity.%s', $name), $name);
//
//                // here is the change
//                if (!is_array($searchFields)) {
//                    $searchFields = [$searchFields];
//                }
//                foreach ($searchFields as $searchField) {
//                    $queryBuilder->orWhere(sprintf('LOWER(%s.%s) LIKE :fuzzy_query', $name, $searchField));
//                    $queryParameters['fuzzy_query'] = '%'.$lowerSearchQuery.'%';
//
//                    $queryBuilder->orWhere(sprintf('LOWER(%s.%s) IN (:words_query)', $name, $searchField));
//                    $queryParameters['words_query'] = explode(' ', $lowerSearchQuery);
//                }
//            }
//        }
//
//        if (0 !== count($queryParameters)) {
//            $queryBuilder->setParameters($queryParameters);
//        }
//
//        return $queryBuilder;
//    }
//
//    /**
//     * {@inheritdoc}
//     */
//    protected function createSearchQueryBuilder($entityClass, $searchQuery, array $searchableFields, $sortField = null, $sortDirection = null, $dqlFilter = null)
//    {
//        /* @var EntityManager */
//        $em = $this->getDoctrine()->getManagerForClass($this->entity['class']);
//        /* @var DoctrineQueryBuilder */
//        $queryBuilder = $em->createQueryBuilder()
//            ->select('entity')
//            ->from($this->entity['class'], 'entity')
//            ->join('entity.company', 'company')
//            ->orWhere('LOWER(company.user) LIKE :query')
//            ->setParameter('query', '%'.strtolower($searchQuery).'%')
//        ;
//        if (!empty($dqlFilter)) {
//            $queryBuilder->andWhere($dqlFilter);
//        }
//        if (null !== $sortField) {
//            $queryBuilder->orderBy('entity.'.$sortField, $sortDirection ?: 'DESC');
//        }
//        return $queryBuilder;
//    }
//
//    /**
//     * @param $entity
//     * @param $view
//     * @return FormBuilder
//     */
//    public function createUserEntityFormBuilder($entity, $view)
//    {
//        $formBuilder = parent::createEntityFormBuilder($entity, $view);
//        $fields = $formBuilder->all();
//        /**
//         * @var  $fieldId string
//         * @var  $field FormBuilder
//         */
//        foreach ($fields as $fieldId => $field) {
//            if ($fieldId == 'user') {
//                $options = [
//                    'attr' => ['size' => 1,],
//                    'required' => true,
//                    'multiple' => false,
//                    'expanded' => false,
//                    'class' => 'App\Entity\User',
//                ];
//                $options['query_builder'] = function (EntityRepository $er) {
//                    $qb = $er->createQueryBuilder('e');
//
//                    return $qb->where($qb->expr()->gt('email', 'a@b.com'))
//                        ->orderBy('email', 'DESC');
//                };
//                $formBuilder->add($fieldId, EntityType::class, $options);
//            }
//        }
//
//        return $formBuilder;
//    }

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
