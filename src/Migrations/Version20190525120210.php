<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190525120210 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE contribution_to_user (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, company_contribution_id INT NOT NULL, user_budget INT NOT NULL, INDEX IDX_2B5CB747A76ED395 (user_id), INDEX IDX_2B5CB747B1AF65C0 (company_contribution_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE company_contribution (id INT AUTO_INCREMENT NOT NULL, company_id INT NOT NULL, budget INT NOT NULL, created_at DATETIME NOT NULL, INDEX IDX_14F8D4DB979B1AD6 (company_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE contribution_to_user ADD CONSTRAINT FK_2B5CB747A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE contribution_to_user ADD CONSTRAINT FK_2B5CB747B1AF65C0 FOREIGN KEY (company_contribution_id) REFERENCES company_contribution (id)');
        $this->addSql('ALTER TABLE company_contribution ADD CONSTRAINT FK_14F8D4DB979B1AD6 FOREIGN KEY (company_id) REFERENCES company (id)');
        $this->addSql('ALTER TABLE vote CHANGE hobby_id hobby_id INT DEFAULT NULL, CHANGE user_id user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE company_id company_id INT DEFAULT NULL, CHANGE email email VARCHAR(255) DEFAULT NULL, CHANGE password password VARCHAR(255) DEFAULT NULL, CHANGE budget budget INT DEFAULT NULL');
        $this->addSql('ALTER TABLE hobby CHANGE title title VARCHAR(255) DEFAULT NULL, CHANGE description description VARCHAR(255) DEFAULT NULL, CHANGE amount amount INT DEFAULT NULL, CHANGE budget budget INT DEFAULT NULL, CHANGE email email VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE contribution_to_user DROP FOREIGN KEY FK_2B5CB747B1AF65C0');
        $this->addSql('DROP TABLE contribution_to_user');
        $this->addSql('DROP TABLE company_contribution');
        $this->addSql('ALTER TABLE hobby CHANGE title title VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE description description VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE amount amount INT DEFAULT NULL, CHANGE budget budget INT DEFAULT NULL, CHANGE email email VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE user CHANGE company_id company_id INT DEFAULT NULL, CHANGE email email VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE password password VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE budget budget INT DEFAULT NULL');
        $this->addSql('ALTER TABLE vote CHANGE hobby_id hobby_id INT DEFAULT NULL, CHANGE user_id user_id INT DEFAULT NULL');
    }
}
