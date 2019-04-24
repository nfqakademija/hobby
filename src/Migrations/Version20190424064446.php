<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20190424064446 extends AbstractMigration
{
    /**
     * {@inheritDoc}
     */
    public function up(Schema $schema) : void
    {
        $this->addSql('ALTER TABLE hobby ADD end_date DATETIME DEFAULT NULL');
    }

    /**
     * {@inheritDoc}
     */
    public function down(Schema $schema) : void
    {
        $this->addSql('ALTER TABLE hobby DROP end_date');
    }
}
