<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20190519163905 extends AbstractMigration
{
    /**
     * {@inheritDoc}
     */
    public function up(Schema $schema) : void
    {
        $this->addSql('CREATE TABLE hobby (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) DEFAULT NULL, description VARCHAR(255) DEFAULT NULL, amount INT DEFAULT NULL, budget INT DEFAULT NULL, email VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE company (id INT AUTO_INCREMENT NOT NULL, budget INT NOT NULL, name VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_4FBF094F5E237E06 (name), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, company_id INT DEFAULT NULL, email VARCHAR(255) DEFAULT NULL, password VARCHAR(255) DEFAULT NULL, role VARCHAR(255) DEFAULT NULL, budget INT DEFAULT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), INDEX IDX_8D93D649979B1AD6 (company_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE vote (id INT AUTO_INCREMENT NOT NULL, hobby_id INT DEFAULT NULL, user_id INT DEFAULT NULL, amount INT NOT NULL, created_at DATETIME NOT NULL, INDEX IDX_5A108564322B2123 (hobby_id), INDEX IDX_5A108564A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649979B1AD6 FOREIGN KEY (company_id) REFERENCES company (id)');
        $this->addSql('ALTER TABLE vote ADD CONSTRAINT FK_5A108564322B2123 FOREIGN KEY (hobby_id) REFERENCES hobby (id)');
        $this->addSql('ALTER TABLE vote ADD CONSTRAINT FK_5A108564A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
    }

    /**
     * {@inheritDoc}
     */
    public function down(Schema $schema) : void
    {
        $this->addSql('ALTER TABLE vote DROP FOREIGN KEY FK_5A108564322B2123');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649979B1AD6');
        $this->addSql('ALTER TABLE vote DROP FOREIGN KEY FK_5A108564A76ED395');
        $this->addSql('DROP TABLE hobby');
        $this->addSql('DROP TABLE company');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE vote');
    }
}
