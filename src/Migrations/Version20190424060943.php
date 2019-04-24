<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20190424060943 extends AbstractMigration
{
    /**
     * {@inheritDoc}
     */
    public function up(Schema $schema) : void
    {
        $this->addSql('ALTER TABLE hobby CHANGE title title VARCHAR(255) DEFAULT NULL, CHANGE description description VARCHAR(255) DEFAULT NULL, CHANGE amount amount DOUBLE PRECISION DEFAULT NULL, CHANGE username username VARCHAR(255) DEFAULT NULL');
    }

    /**
     * {@inheritDoc}
     */
    public function down(Schema $schema) : void
    {
        $this->addSql('ALTER TABLE hobby CHANGE title title VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE description description VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE amount amount DOUBLE PRECISION DEFAULT \'NULL\', CHANGE username username VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci');
    }
}
