<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(): Response
    {
        return $this->render('three.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }

    #[Route('/rezerwacja3d', name: 'rezerwacja3d')]
    public function rez3d(): Response
    {
        return $this->render('rez3d.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }

}
