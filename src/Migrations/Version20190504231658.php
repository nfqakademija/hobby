<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;


final class Version20190504231658 extends AbstractMigration
{
    /**
     * {@inheritDoc}
     */
    public function up(Schema $schema) : void
    {
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, username VARCHAR(255) NOT NULL, role VARCHAR(255) NOT NULL, budget INT NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), UNIQUE INDEX UNIQ_8D93D649F85E0677 (username), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
    }

    /**
     * {@inheritDoc}
     */
    public function down(Schema $schema) : void
    {
        $this->addSql('DROP TABLE user');
    }
}