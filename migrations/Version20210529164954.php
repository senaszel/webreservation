<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210529164954 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE rezerwacja_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE rezerwacja (id INT NOT NULL, numer_stolika INT NOT NULL, licz_gosci INT NOT NULL, data TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, numer_kontaktowy VARCHAR(255) NOT NULL, imie_rezerwujacego VARCHAR(255) NOT NULL, nazwisko_rezerwujacego VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE rezerwacja_id_seq CASCADE');
        $this->addSql('DROP TABLE rezerwacja');
    }
}
