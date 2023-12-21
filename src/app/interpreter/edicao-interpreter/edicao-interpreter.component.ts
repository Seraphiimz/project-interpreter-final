// edicao-interpreter.component.ts

import { Component, Input, OnInit } from '@angular/core';
import {InterpreterService} from "../../services/interpreter.service";
@Component({
  selector: 'app-edicao-interpreter',
  templateUrl: './edicao-interpreter.component.html',
  styleUrls: ['./edicao-interpreter.component.css']
})
export class EdicaoInterpreterComponent implements OnInit {
  @Input() interpreterId!: number;
  novoNome!: string;
  novaMatricula!: string;
  novoEmail!: string;
  novoTelefone!: string;
  novoHorario!: string;
  listInterpretes: any;

  constructor(private interpreterService: InterpreterService) {}

  ngOnInit(): void {
    this.interpreterService.listas_interpreter().subscribe(
      response => {
        this.listInterpretes = response;
      }
    )
  }

  salvarEdicao(): void {
    if (this.camposForamEditados()) {
      this.interpreterService.salvarEdicao(this.interpreterId, {
        nome: this.novoNome,
        matricula: this.novaMatricula,
        email: this.novoEmail,
        telefone: parseInt(this.novoTelefone, 10),
        horario: this.novoHorario
      }).subscribe(
        (resultado) => {
          console.log('Intérprete atualizado com sucesso!', resultado);
          this.limparCampos();
        },
        (erro) => {
          console.error('Erro ao atualizar o intérprete', erro);
        }
      );
    }
  }

  cancelarEdicao(): void {
    this.limparCampos();
  }

  private camposForamEditados(): boolean {
    return (
      this.novoNome !== undefined ||
      this.novaMatricula !== undefined ||
      this.novoEmail !== undefined ||
      this.novoTelefone !== undefined ||
      this.novoHorario !== undefined
    );
  }

  private limparCampos(): void {
    this.novoNome = '';
    this.novaMatricula = '';
    this.novoEmail = '';
    this.novoTelefone = '';
    this.novoHorario = '';
  }
}
