<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20190526061840 extends AbstractMigration
{
    /**
     * {@inheritDoc}
     */
    public function up(Schema $schema) : void
    {
        $this->addSql('ALTER TABLE company DROP budget');
        $this->addSql('ALTER TABLE contribution_to_user CHANGE user_budget user_budget INT DEFAULT NULL');
        $this->addSql('ALTER TABLE vote DROP FOREIGN KEY FK_5A108564322B2123');
        $this->addSql('DROP INDEX IDX_5A108564322B2123 ON vote');
        $this->addSql('ALTER TABLE vote ADD hobby INT DEFAULT NULL, DROP hobby_id, CHANGE user_id user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE vote ADD CONSTRAINT FK_5A1085643964F337 FOREIGN KEY (hobby) REFERENCES hobby (id)');
        $this->addSql('CREATE INDEX IDX_5A1085643964F337 ON vote (hobby)');
        $this->addSql('ALTER TABLE user CHANGE company_id company_id INT DEFAULT NULL, CHANGE email email VARCHAR(255) DEFAULT NULL, CHANGE password password VARCHAR(255) DEFAULT NULL, CHANGE budget budget INT DEFAULT NULL');
        $this->addSql('ALTER TABLE hobby DROP budget, CHANGE title title VARCHAR(255) DEFAULT NULL, CHANGE description description VARCHAR(255) DEFAULT NULL, CHANGE amount amount INT DEFAULT NULL, CHANGE email email VARCHAR(255) DEFAULT NULL');
    }

    /**
     * {@inheritDoc}
     */
    public function down(Schema $schema) : void
    {
        $this->addSql('ALTER TABLE company ADD budget INT NOT NULL');
        $this->addSql('ALTER TABLE contribution_to_user CHANGE user_budget user_budget INT NOT NULL');
        $this->addSql('ALTER TABLE hobby ADD budget INT DEFAULT NULL, CHANGE title title VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE description description VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE amount amount INT DEFAULT NULL, CHANGE email email VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE user CHANGE company_id company_id INT DEFAULT NULL, CHANGE email email VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE password password VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE budget budget INT DEFAULT NULL');
        $this->addSql('ALTER TABLE vote DROP FOREIGN KEY FK_5A1085643964F337');
        $this->addSql('DROP INDEX IDX_5A1085643964F337 ON vote');
        $this->addSql('ALTER TABLE vote ADD hobby_id INT DEFAULT NULL, DROP hobby, CHANGE user_id user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE vote ADD CONSTRAINT FK_5A108564322B2123 FOREIGN KEY (hobby_id) REFERENCES hobby (id)');
        $this->addSql('CREATE INDEX IDX_5A108564322B2123 ON vote (hobby_id)');
    }
}
