import {Component, Inject, OnInit} from '@angular/core';
import {Interpreter_user} from "../../shared/model/interpreter_user";
import {InterpreterService} from "../../services/interpreter.service";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {EdicaoInterpreterComponent} from "../edicao-interpreter/edicao-interpreter.component";

@Component({
  selector: 'app-listas-interpreter',
  templateUrl: './listas-interpreter.component.html',
  styleUrls: ['./listas-interpreter.component.css']
})
export class ListasInterpreterComponent implements OnInit{
  interpretes: Interpreter_user[] = [];
  matricula_interpreter: string = "";
  pesquisados_interpreter: Interpreter_user[] = [];

  constructor(
    private interprete_service: InterpreterService,
    private roteador: Router,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: {id: string}
  ){}

  ngOnInit() {
    this.interprete_service.pesquisarPorId(this.data.id).subscribe(interpretes => {
      console.log(interpretes)
      this.pesquisados_interpreter.push(interpretes);
      //nao existe pesquisar por enquanto
    });
  }

  remover(interprete_remover: Interpreter_user): void {
    this.interprete_service.remover(interprete_remover).subscribe( interpreteRemover => {
        console.log('Interprete removido');
        const indxARemover = this.interpretes.findIndex(interpreter =>
          interpreter.matricula === interpreteRemover.matricula);

        if (indxARemover >= 0) {
          this.interpretes.splice(indxARemover, 1);
        }
      }
    );
  }

  editar(interprete_atulizar: Interpreter_user): void {
    console.log(interprete_atulizar);
    this.interprete_service.salvarEdicao(interprete_atulizar.id, interprete_atulizar).subscribe(interpretes => {
      console.log(interpretes);
    });
    this.roteador.navigate(['edicao-interpreter', interprete_atulizar.id]);
  }

  abrirEdicaoModal(id: string): void {
    this.dialog.open(EdicaoInterpreterComponent, {
      width: '400px',
      data: {id: id},
    });
  }
}
