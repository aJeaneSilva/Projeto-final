import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, OnInit, signal, computed } from '@angular/core';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';
import { PARCEIROS_DISPONIVEIS, Parceiro } from '../../user';

@Component({
  selector: 'app-mathes',
  standalone: true,
  imports: [Header, Footer, CommonModule, TitleCasePipe],
  templateUrl: './mathes.html',
  styleUrl: './mathes.css',
})
export class Mathes implements OnInit {
  todosOsParceiros: Parceiro[] = [];
  paisSelecionado = signal<string>('');

  ngOnInit(): void {
    this.todosOsParceiros = PARCEIROS_DISPONIVEIS;
  }
  viajantesFiltrados = computed<Parceiro[]>(() => {
    const filtro = this.paisSelecionado();
    
    if (!filtro) {
      return this.todosOsParceiros;
    }
    return this.todosOsParceiros.filter(v => v.destino === filtro);
  });

  paisesUnicos = computed<string[]>(() => {
    const todosOsDestinos = this.todosOsParceiros.map(p => p.destino);
    return [...new Set(todosOsDestinos)];
  });
}