<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20190530131314 extends AbstractMigration
{
    /**
     * {@inheritDoc}
     */
    public function up(Schema $schema) : void
    {
        $this->addSql('ALTER TABLE vote CHANGE user_id user_id INT DEFAULT NULL, CHANGE hobby hobby INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD registration_token VARCHAR(255) DEFAULT NULL, ADD active TINYINT(1) NOT NULL, CHANGE company_id company_id INT DEFAULT NULL, CHANGE email email VARCHAR(255) DEFAULT NULL, CHANGE password password VARCHAR(255) DEFAULT NULL, CHANGE budget budget INT DEFAULT NULL');
        $this->addSql('ALTER TABLE hobby CHANGE title title VARCHAR(255) DEFAULT NULL, CHANGE description description VARCHAR(255) DEFAULT NULL, CHANGE amount amount INT DEFAULT NULL, CHANGE email email VARCHAR(255) DEFAULT NULL');
    }

    /**
     * {@inheritDoc}
     */
    public function down(Schema $schema) : void
    {
        $this->addSql('ALTER TABLE hobby CHANGE title title VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE description description VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE amount amount INT DEFAULT NULL, CHANGE email email VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE user DROP registration_token, DROP active, CHANGE company_id company_id INT DEFAULT NULL, CHANGE email email VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE password password VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci, CHANGE budget budget INT DEFAULT NULL');
        $this->addSql('ALTER TABLE vote CHANGE hobby hobby INT DEFAULT NULL, CHANGE user_id user_id INT DEFAULT NULL');
    }
}
