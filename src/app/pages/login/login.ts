import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  nome = '';
  email = '';
  senha = '';

  constructor(private router: Router) {}

  onSubmit(event: Event) {
    event.preventDefault();
    
    if (!this.nome || !this.email || !this.senha) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return;
    }
    localStorage.setItem('usuarioLogado', 'true');
    console.log('Usuário cadastrado e logado com sucesso!');
    this.router.navigate(['/home']);
  }
}