import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer'; 
import { PAISES_MOCK, InformacoesPais } from '../../dados-paises';

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [CommonModule, FormsModule, Header, Footer],
  templateUrl: './pesquisa.html',
  styleUrl: './pesquisa.css'
})
export class Pesquisa {
  
  paisSelecionado: string = '';
  focoSelecionado = signal<string>('estudos');
  resultadoGuia = signal<InformacoesPais | null>(null);

  buscarInformacoes(): void {
    if (!this.paisSelecionado) {
      alert('Por favor, selecione um país de destino.');
      return;
    }

    const paisEncontrado = PAISES_MOCK.find((pais: InformacoesPais) => pais.id === this.paisSelecionado);

    if (paisEncontrado) {
      this.resultadoGuia.set(paisEncontrado);
    } else {
      this.resultadoGuia.set(null);
    }
  }
}