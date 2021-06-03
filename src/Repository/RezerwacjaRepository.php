<?php

namespace App\Repository;

use App\Entity\Rezerwacja;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Rezerwacja|null find($id, $lockMode = null, $lockVersion = null)
 * @method Rezerwacja|null findOneBy(array $criteria, array $orderBy = null)
 * @method Rezerwacja[]    findAll()
 * @method Rezerwacja[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RezerwacjaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Rezerwacja::class);
    }

    // /**
    //  * @return Rezerwacja[] Returns an array of Rezerwacja objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Rezerwacja
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
