import { Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true, 
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuAberto = signal(false);

  constructor() {}

  estaLogado(): boolean {
    return localStorage.getItem('usuarioLogado') === 'true';
  }

  logout(): void {
  if (confirm('Deseja realmente sair?')) {
    localStorage.removeItem('usuarioLogado');
    alert('Você saiu da conta.');
    window.location.reload();
  }
}

  avisarSemNotificacao(): void {
  alert('Você não tem novas notificações no momento.');
}

  dispararClique(): void {
    this.menuAberto.update(valor => !valor);
  }

  menuAtivo(): boolean {
    return this.menuAberto();
  }
}