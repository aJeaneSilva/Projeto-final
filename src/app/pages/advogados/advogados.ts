import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Footer } from "../../footer/footer";
import { Header } from "../../header/header";

@Component({
  selector: 'app-advogados',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Footer, Header],
  templateUrl: './advogados.html',
  styleUrl: './advogados.css',
})
export class Advogados implements OnInit, OnDestroy {

  formSuporte!: FormGroup;
  enviado = false;
  advogadoResponsavel = '';
  private formSubscription!: Subscription;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.inicializarFormulario();

    const statusSucesso = localStorage.getItem('suporte_enviado');
    const advogadoSalvo = localStorage.getItem('suporte_advogado');
    
    if (statusSucesso === 'true' && advogadoSalvo) {
      this.enviado = true;
      this.advogadoResponsavel = advogadoSalvo;
    } else {
      this.recuperarRascunho();
    }

    this.formSubscription = this.formSuporte.valueChanges.subscribe(valores => {
      if (!this.enviado) {
        localStorage.setItem('rascunho_suporte', JSON.stringify(valores));
      }
    });
  }
  ngOnDestroy(): void {
    if (this.formSubscription) {
      this.formSubscription.unsubscribe();
    }
  }

  inicializarFormulario(): void {
    this.formSuporte = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      motivoViagem: ['', Validators.required],
      descricaoSituacao: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  recuperarRascunho(): void {
    const rascunho = localStorage.getItem('rascunho_suporte');
    if (rascunho) {
      const dados = JSON.parse(rascunho);
      this.formSuporte.patchValue(dados);
    }
  }

  enviarFormulario(): void {
    if (this.formSuporte.valid) {
      const motivo = this.formSuporte.get('motivoViagem')?.value;
      this.advogadoResponsavel = this.definirAdvogado(motivo);

      const chamadosAtuais = JSON.parse(localStorage.getItem('chamadosJuridicos') || '[]');
      const novoChamado = {
        ...this.formSuporte.value,
        advogadoDesignado: this.advogadoResponsavel,
        data: new Date().toLocaleDateString('pt-BR')
      };
      chamadosAtuais.push(novoChamado);
      localStorage.setItem('chamadosJuridicos', JSON.stringify(chamadosAtuais));
      localStorage.setItem('suporte_enviado', 'true');
      localStorage.setItem('suporte_advogado', this.advogadoResponsavel);
      
      this.enviado = true;
      
      localStorage.removeItem('rascunho_suporte');
      this.formSuporte.reset();
    } else {
      this.formSuporte.markAllAsTouched();
    }
  }

  definirAdvogado(motivo: string): string {
    switch(motivo) {
      case 'trabalho': return 'Dr. Ricardo M. (Especialista em Direito Trabalhista Internacional)';
      case 'intercambio': return 'Dra. Fernanda Costa (Especialista em Vistos e Direito Educacional)';
      case 'moradia': return 'Dr. Alexandre Reis (Especialista em Processos Migratórios e Cidadania)';
      default: return 'Dra. Beatriz Silva (Suporte Jurídico Geral)';
    }
  }

  novoContato(): void {
    localStorage.removeItem('suporte_enviado');
    localStorage.removeItem('suporte_advogado');
    localStorage.removeItem('rascunho_suporte');
    this.enviado = false;
    this.inicializarFormulario();
  }
}