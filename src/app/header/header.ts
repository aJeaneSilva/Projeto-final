import { Component, signal } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true, 
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuAberto = signal(false);

  constructor(private router: Router) {}

  estaLogado(): boolean {
    return localStorage.getItem('usuarioLogado') === 'true';
  }

  logout(): void {
    localStorage.removeItem('usuarioLogado');
    this.router.navigate(['/login']);
  }

  dispararClique(): void {
    this.menuAberto.update(valor => !valor);
  }

  menuAtivo(): boolean {
    return this.menuAberto();
  }
}