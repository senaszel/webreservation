<?php

namespace App\Entity;

use App\Repository\RezerwacjaRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RezerwacjaRepository::class)
 */
class Rezerwacja
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $numer_stolika;

    /**
     * @ORM\Column(type="integer")
     */
    private $licz_gosci;

    /**
     * @ORM\Column(type="datetime")
     */
    private $data;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $numer_kontaktowy;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $imie_rezerwujacego;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nazwisko_rezerwujacego;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumerStolika(): ?int
    {
        return $this->numer_stolika;
    }

    public function setNumerStolika(int $numer_stolika): self
    {
        $this->numer_stolika = $numer_stolika;

        return $this;
    }

    public function getLiczGosci(): ?int
    {
        return $this->licz_gosci;
    }

    public function setLiczGosci(int $licz_gosci): self
    {
        $this->licz_gosci = $licz_gosci;

        return $this;
    }

    public function getData(): ?\DateTimeInterface
    {
        return $this->data;
    }

    public function setData(\DateTimeInterface $data): self
    {
        $this->data = $data;

        return $this;
    }

    public function getNumerKontaktowy(): ?string
    {
        return $this->numer_kontaktowy;
    }

    public function setNumerKontaktowy(string $numer_kontaktowy): self
    {
        $this->numer_kontaktowy = $numer_kontaktowy;

        return $this;
    }

    public function getImieRezerwujacego(): ?string
    {
        return $this->imie_rezerwujacego;
    }

    public function setImieRezerwujacego(string $imie_rezerwujacego): self
    {
        $this->imie_rezerwujacego = $imie_rezerwujacego;

        return $this;
    }

    public function getNazwiskoRezerwujacego(): ?string
    {
        return $this->nazwisko_rezerwujacego;
    }

    public function setNazwiskoRezerwujacego(string $nazwisko_rezerwujacego): self
    {
        $this->nazwisko_rezerwujacego = $nazwisko_rezerwujacego;

        return $this;
    }
}
