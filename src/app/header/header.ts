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
      
      localStorage.removeItem('rascunho_suporte');
      localStorage.removeItem('suporte_enviado');
      localStorage.removeItem('suporte_advogado');
      
      localStorage.removeItem('rascunho_parceiros');
      localStorage.removeItem('parceiros_busca_realizada');
      localStorage.removeItem('parceiros_filtrados_salvos');
      
      localStorage.removeItem('pesquisa_pais_selecionado');
      localStorage.removeItem('pesquisa_foco');
      localStorage.removeItem('pesquisa_guia_salvo');
      localStorage.removeItem('pesquisa_checklist_estados');
      
      localStorage.removeItem('mathes_pais_selecionado');

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