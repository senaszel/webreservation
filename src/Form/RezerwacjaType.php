<?php

namespace App\Form;

use App\Entity\Rezerwacja;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class RezerwacjaType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('numer_stolika')
            ->add('licz_gosci')
            ->add('data')
            ->add('numer_kontaktowy')
            ->add('imie_rezerwujacego')
            ->add('nazwisko_rezerwujacego')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Rezerwacja::class,
        ]);
    }
}
