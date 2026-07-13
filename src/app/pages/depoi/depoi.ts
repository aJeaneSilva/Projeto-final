import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Footer } from "../../footer/footer";
import { Header } from "../../header/header";

@Component({
  selector: 'app-depoi',
  imports: [Footer, Header],
  templateUrl: './depoi.html',
  styleUrl: './depoi.css',
})
export class Depoi implements OnInit, OnDestroy {
  fotosViajantes = [
    'img/viagem1.png',
    'img/viagem2.png',
    'img/viagem3.png',
    'img/viagem4.png',
    'img/viagem5.png',
    'img/viagem6.png',
    'img/viagem7.png'
];
  indiceAtual = 0;
  timerInterval: any;

  constructor(private cdr: ChangeDetectorRef) {}

    ngOnInit() {
      this.iniciarAutoplay();
    }
    ngOnDestroy() {
      this.pararAutoplay();
    }

    iniciarAutoplay() {
      this.timerInterval = setInterval(() => {
        this.proximaFoto();
      }, 3000);
    }
    pararAutoplay() {
      if (this.timerInterval) {
        clearInterval (this.timerInterval);
      }
    }

    proximaFoto() {
      this.indiceAtual = (this.indiceAtual + 1) % this.fotosViajantes.length;
      this.cdr.detectChanges();
    }
    fotoAnterior() {
      this.indiceAtual = (this.indiceAtual - 1 + this.fotosViajantes.length) % this.fotosViajantes.length;
      this.cdr.detectChanges();
    }
    resetarTimer() {
      this.pararAutoplay();
      this.iniciarAutoplay();
    }

}
