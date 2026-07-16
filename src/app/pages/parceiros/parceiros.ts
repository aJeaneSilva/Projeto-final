import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { PARCEIROS_DISPONIVEIS, Parceiro } from '../../user';
import { Header } from "../../header/header";
import { Footer } from "../../footer/footer";

@Component({
  standalone: true,
  imports: [Header, Footer, ReactiveFormsModule, CommonModule],
  selector: 'parceiros',
  templateUrl: './parceiros.html',
  styleUrls: ['./parceiros.css']
})
export class Parceiros implements OnInit, OnDestroy {
  formMatch!: FormGroup;
  buscaRealizada = false;
  parceirosFiltrados: Parceiro[] = [];
  paisesDisponiveis = [
    'Estados Unidos', 'Canadá', 'Suíça', 'Irlanda', 'Alemanha', 
    'Inglaterra', 'Austrália', 'Japão', 'Espanha', 'Portugal'
  ];

  private formSubscription!: Subscription;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.inicializarFormulario();

    const buscaSalva = localStorage.getItem('parceiros_busca_realizada');
    const parceirosSalvos = localStorage.getItem('parceiros_filtrados_salvos');

    if (buscaSalva === 'true' && parceirosSalvos) {
      this.buscaRealizada = true;
      this.parceirosFiltrados = JSON.parse(parceirosSalvos);
    } else {
      this.recuperarRascunho();
    }

    this.formSubscription = this.formMatch.valueChanges.subscribe(valores => {
      if (!this.buscaRealizada) {
        localStorage.setItem('rascunho_parceiros', JSON.stringify(valores));
      }
    });
  }

  ngOnDestroy(): void {
    if (this.formSubscription) {
      this.formSubscription.unsubscribe();
    }
  }
  inicializarFormulario(): void {
    this.formMatch = this.fb.group({
      destino: ['', Validators.required],
      objetivo: ['', Validators.required],
      preferenciaGenero: ['todos', Validators.required],
      orcamento: ['', Validators.required],
      descricaoPessoal: ['']
    });
  }

  recuperarRascunho(): void {
    const rascunho = localStorage.getItem('rascunho_parceiros');
    if (rascunho) {
      const dados = JSON.parse(rascunho);
      this.formMatch.patchValue(dados);
    }
  }

  buscarParceiros(): void {
    if (this.formMatch.invalid) {
      this.formMatch.markAllAsTouched();
      return;
    }

    const busca = this.formMatch.value;
    let resultado = PARCEIROS_DISPONIVEIS.filter(p => {
      const bateDestino = p.destino === busca.destino;
      const bateObjetivo = p.objetivo === busca.objetivo;
      const bateGenero = busca.preferenciaGenero === 'todos' || p.genero === busca.preferenciaGenero;
      
      return bateDestino && bateObjetivo && bateGenero;
    });

    if (resultado.length > 4) {
      const refinado = resultado.filter(p => p.orcamento === busca.orcamento);
      if (refinado.length > 0) {
        resultado = refinado;
      }
    }

    this.parceirosFiltrados = resultado.slice(0, 5);
    this.buscaRealizada = true;
    localStorage.setItem('parceiros_busca_realizada', 'true');
    localStorage.setItem('parceiros_filtrados_salvos', JSON.stringify(this.parceirosFiltrados));
    localStorage.removeItem('rascunho_parceiros');
  }

  novaBusca(): void {
    localStorage.removeItem('parceiros_busca_realizada');
    localStorage.removeItem('parceiros_filtrados_salvos');
    localStorage.removeItem('rascunho_parceiros');

    this.buscaRealizada = false;
    this.parceirosFiltrados = [];
    this.formMatch.reset({ 
      preferenciaGenero: 'todos', 
      destino: '', 
      objetivo: '', 
      orcamento: '',
      descricaoPessoal: '' 
    });
  }
}