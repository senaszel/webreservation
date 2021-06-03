<?php

namespace App\Controller;

use App\Entity\Rezerwacja;
use App\Form\RezerwacjaType;
use App\Repository\RezerwacjaRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/rezerwacje')]
class RezerwacjaController extends AbstractController
{
    #[Route('/', name: 'rezerwacja_index', methods: ['GET'])]
    public function index(RezerwacjaRepository $rezerwacjaRepository): Response
    {
        return $this->render('rezerwacja/index.html.twig', [
            'rezerwacjas' => $rezerwacjaRepository->findAll(),
        ]);
    }

    #[Route('/nowa_rezerwacja', name: 'nowa_rezerwacja', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        $rezerwacja = new Rezerwacja();
        $form = $this->createForm(RezerwacjaType::class, $rezerwacja);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($rezerwacja);
            $entityManager->flush();

            return $this->redirectToRoute('rezerwacja_index');
        }

        return $this->render('rezerwacja/new.html.twig', [
            'rezerwacja' => $rezerwacja,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'rezerwacja_show', methods: ['GET'])]
    public function show(Rezerwacja $rezerwacja): Response
    {
        return $this->render('rezerwacja/show.html.twig', [
            'rezerwacja' => $rezerwacja,
        ]);
    }

    #[Route('/{id}/edytuj', name: 'rezerwacja_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Rezerwacja $rezerwacja): Response
    {
        $form = $this->createForm(RezerwacjaType::class, $rezerwacja);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('rezerwacja_index');
        }

        return $this->render('rezerwacja/edit.html.twig', [
            'rezerwacja' => $rezerwacja,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'rezerwacja_delete', methods: ['POST'])]
    public function delete(Request $request, Rezerwacja $rezerwacja): Response
    {
        if ($this->isCsrfTokenValid('delete'.$rezerwacja->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($rezerwacja);
            $entityManager->flush();
        }

        return $this->redirectToRoute('rezerwacja_index');
    }
}
