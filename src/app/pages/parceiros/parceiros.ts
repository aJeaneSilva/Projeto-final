import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
export class Parceiros implements OnInit {
  formMatch!: FormGroup;
  buscaRealizada = false;
  parceirosFiltrados: Parceiro[] = [];
  paisesDisponiveis = [
    'Estados Unidos', 'Canadá', 'Suíça', 'Irlanda', 'Alemanha', 
    'Inglaterra', 'Austrália', 'Japão', 'Espanha', 'Portugal'
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formMatch = this.fb.group({
      destino: ['', Validators.required],
      objetivo: ['', Validators.required],
      preferenciaGenero: ['todos', Validators.required],
      orcamento: ['', Validators.required]
    });
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
  }
  novaBusca(): void {
    this.buscaRealizada = false;
    this.formMatch.reset({ preferenciaGenero: 'todos', destino: '', objetivo: '', orcamento: '' });
  }
}