import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Footer } from "../../footer/footer";
import { Header } from "../../header/header";

@Component({
  selector: 'app-advogados',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Footer, Header],
  templateUrl: './advogados.html',
  styleUrl: './advogados.css',
})
export class Advogados {

  formSuporte!: FormGroup;
  enviado = false;
  advogadoResponsavel = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario(): void {
    this.formSuporte = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      motivoViagem: ['', Validators.required],
      descricaoSituacao: ['', [Validators.required, Validators.minLength(20)]]
    });
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
      this.enviado = true;
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
  } novoContato(): void {
    this.enviado = false;
  }
}
