import { Component, OnInit, signal, effect } from '@angular/core';
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
export class Pesquisa implements OnInit {
  
  paisSelecionado: string = '';
  focoSelecionado = signal<string>('estudos');
  resultadoGuia = signal<InformacoesPais | null>(null);
  checklistEstados: { [pais: string]: { [tarefa: string]: boolean } } = {};

  constructor() {
    effect(() => {
      localStorage.setItem('pesquisa_foco', this.focoSelecionado());
      
      const guia = this.resultadoGuia();
      if (guia) {
        localStorage.setItem('pesquisa_guia_salvo', JSON.stringify(guia));
      } else {
        localStorage.removeItem('pesquisa_guia_salvo');
      }
    });
  }

  ngOnInit(): void {
    const paisSalvo = localStorage.getItem('pesquisa_pais_selecionado');
    if (paisSalvo) {
      this.paisSelecionado = paisSalvo;
    }
    const focoSalvo = localStorage.getItem('pesquisa_foco');
    if (focoSalvo) {
      this.focoSelecionado.set(focoSalvo);
    }

    const guiaSalvo = localStorage.getItem('pesquisa_guia_salvo');
    if (guiaSalvo) {
      this.resultadoGuia.set(JSON.parse(guiaSalvo));
    }

    const checklistSalvo = localStorage.getItem('pesquisa_checklist_estados');
    if (checklistSalvo) {
      this.checklistEstados = JSON.parse(checklistSalvo);
    }
  }

  salvarPais(): void {
    localStorage.setItem('pesquisa_pais_selecionado', this.paisSelecionado);
  }

  alterarFoco(novoFoco: string): void {
    this.focoSelecionado.set(novoFoco);
  }

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

  isItemMarcado(tarefa: string): boolean {
    const paisId = this.resultadoGuia()?.id;
    if (!paisId || !this.checklistEstados[paisId]) {
      return false;
    }
    return !!this.checklistEstados[paisId][tarefa];
  }

  alternarItemChecklist(tarefa: string, evento: any): void {
    const paisId = this.resultadoGuia()?.id;
    if (!paisId) return;
    if (!this.checklistEstados[paisId]) {
      this.checklistEstados[paisId] = {};
    }

    this.checklistEstados[paisId][tarefa] = evento.target.checked;
    localStorage.setItem('pesquisa_checklist_estados', JSON.stringify(this.checklistEstados));
  }

  limparBusca(): void {
    localStorage.removeItem('pesquisa_pais_selecionado');
    localStorage.removeItem('pesquisa_foco');
    localStorage.removeItem('pesquisa_guia_salvo');
    localStorage.removeItem('pesquisa_checklist_estados');
    this.paisSelecionado = '';
    this.focoSelecionado.set('estudos');
    this.resultadoGuia.set(null);
    this.checklistEstados = {};
  }
}