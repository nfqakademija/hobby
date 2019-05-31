<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use Doctrine\ORM\Mapping\ClassMetadata;
use EasyCorp\Bundle\EasyAdminBundle\Controller\EasyAdminController;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class BaseAdminController extends EasyAdminController
{
    /**
     * {@inheritdoc}
     */
    protected function createSearchQueryBuilder(
        $entityClass,
        $searchQuery,
        array $searchableFields,
        $sortField = null,
        $sortDirection = null,
        $dqlFilter = null
    ) {
        $queryBuilder = $this->get('easyadmin.query_builder')->createSearchQueryBuilder(
            $this->entity,
            $searchQuery,
            $sortField,
            $sortDirection,
            $dqlFilter
        );
        $lowerSearchQuery = mb_strtolower($searchQuery);

        $queryParameters = [];
        foreach ($this->entity['search']['fields'] as $name => $metadata) {
            if ('association' === $metadata['dataType']) {
                if (false === array_key_exists('searchField', $metadata)) {
                    throw new NotFoundHttpException($this->entity['name']);
                }

                $searchFields = $metadata['searchField'];
                $queryBuilder->join(sprintf('entity.%s', $name), $name);

                if (!is_array($searchFields)) {
                    $searchFields = [$searchFields];
                }
                foreach ($searchFields as $searchField) {
                    $queryBuilder->orWhere(sprintf('LOWER(%s.%s) LIKE :fuzzy_query', $name, $searchField));
                    $queryParameters['fuzzy_query'] = '%'.$lowerSearchQuery.'%';

                    $queryBuilder->orWhere(sprintf('LOWER(%s.%s) IN (:words_query)', $name, $searchField));
                    $queryParameters['words_query'] = explode(' ', $lowerSearchQuery);
                }
            }
        }

        if (0 !== count($queryParameters)) {
            $queryBuilder->setParameters($queryParameters);
        }

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

        return false !== \strpos($fieldName, '.')
            && !\array_key_exists($fieldNameParts[0], $classMetadata->embeddedClasses);
    }
}
