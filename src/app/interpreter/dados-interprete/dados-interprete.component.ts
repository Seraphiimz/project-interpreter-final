import { Component } from '@angular/core';
import { Interpreter_user } from "../../shared/model/interpreter_user";
import { InterpreterService } from "../../services/interpreter.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dados-interprete',
  templateUrl: './dados-interprete.component.html',
  styleUrls: ['./dados-interprete.component.css']
})
export class DadosInterpreteComponent {
  interpretes: Interpreter_user[] = [];
  pesquisados_interpreter: Interpreter_user[] = [];


  constructor(private interpreterService: InterpreterService, private roteador: Router) {
  }

  editar(interprete_atulizar: Interpreter_user): void {
    console.log(interprete_atulizar);
    this.interpreterService.atulizar(interprete_atulizar).subscribe(interpretes => {
      console.log(interpretes)
      this.pesquisados_interpreter.push(interpretes);
    });
    this.roteador.navigate(['edicao-interpreter', interprete_atulizar.id]);
  }

  deleteItem(interprete_remover: Interpreter_user): void {
    this.interpreterService.remover(interprete_remover);
  }
}
