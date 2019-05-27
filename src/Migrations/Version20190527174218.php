<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20190527174218 extends AbstractMigration
{
    /**
     * {@inheritDoc}
     */
    public function up(Schema $schema) : void
    {
        $this->addSql('ALTER TABLE contribution_to_user DROP FOREIGN KEY FK_2B5CB747B1AF65C0');
        $this->addSql('CREATE TABLE contribution (id INT AUTO_INCREMENT NOT NULL, company_id INT NOT NULL, amount INT NOT NULL, INDEX IDX_EA351E15979B1AD6 (company_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE contribution_user (contribution_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_4E41A211FE5E5FBD (contribution_id), INDEX IDX_4E41A211A76ED395 (user_id), PRIMARY KEY(contribution_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE contribution ADD CONSTRAINT FK_EA351E15979B1AD6 FOREIGN KEY (company_id) REFERENCES company (id)');
        $this->addSql('ALTER TABLE contribution_user ADD CONSTRAINT FK_4E41A211FE5E5FBD FOREIGN KEY (contribution_id) REFERENCES contribution (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE contribution_user ADD CONSTRAINT FK_4E41A211A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE company_contribution');
        $this->addSql('DROP TABLE contribution_to_user');
        $this->addSql('ALTER TABLE hobby CHANGE title title VARCHAR(255) DEFAULT NULL, CHANGE description description VARCHAR(255) DEFAULT NULL, CHANGE amount amount INT DEFAULT NULL, CHANGE email email VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE company_id company_id INT DEFAULT NULL, CHANGE email email VARCHAR(255) DEFAULT NULL, CHANGE password password VARCHAR(255) DEFAULT NULL, CHANGE budget budget INT DEFAULT NULL');
        $this->addSql('ALTER TABLE vote CHANGE user_id user_id INT DEFAULT NULL, CHANGE hobby hobby INT DEFAULT NULL');
    }

    /**
     * {@inheritDoc}
     */
    public function down(Schema $schema) : void
    {
        $this->addSql('ALTER TABLE contribution_user DROP FOREIGN KEY FK_4E41A211FE5E5FBD');
        $this->addSql('CREATE TABLE company_contribution (id INT AUTO_INCREMENT NOT NULL, company_id INT NOT NULL, budget INT NOT NULL, created_at DATETIME NOT NULL, INDEX IDX_14F8D4DB979B1AD6 (company_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE contribution_to_user (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, company_contribution_id INT NOT NULL, user_budget INT DEFAULT NULL, INDEX IDX_2B5CB747A76ED395 (user_id), INDEX IDX_2B5CB747B1AF65C0 (company_contribution_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE company_contribution ADD CONSTRAINT FK_14F8D4DB979B1AD6 FOREIGN KEY (company_id) REFERENCES company (id)');
        $this->addSql('ALTER TABLE contribution_to_user ADD CONSTRAINT FK_2B5CB747A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE contribution_to_user ADD CONSTRAINT FK_2B5CB747B1AF65C0 FOREIGN KEY (company_contribution_id) REFERENCES company_contribution (id)');
        $this->addSql('DROP TABLE contribution');
        $this->addSql('DROP TABLE contribution_user');
        $this->addSql('ALTER TABLE hobby CHANGE title title VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE description description VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE amount amount INT DEFAULT NULL, CHANGE email email VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE user CHANGE company_id company_id INT DEFAULT NULL, CHANGE email email VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE password password VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE budget budget INT DEFAULT NULL');
        $this->addSql('ALTER TABLE vote CHANGE hobby hobby INT DEFAULT NULL, CHANGE user_id user_id INT DEFAULT NULL');
    }
}
