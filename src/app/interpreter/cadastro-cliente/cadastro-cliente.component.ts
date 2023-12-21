import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UsusarioInterprete} from "../../shared/model/ususarioInterprete";
import {InterpreterService} from "../../services/interpreter.service";

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent {
  interpreterName: string = '';
  interpreterEmail: string = '';
  interpreterPassword: string = '';

  constructor(private router: Router, private interpreteService: InterpreterService) {}

  register() {
    this.interpreteService.registerInterpreter(this.interpreterName, this.interpreterEmail, this.interpreterPassword).subscribe(
      () => {
        alert("Cadastro de intérprete bem-sucedido!");
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Erro ao cadastrar intérprete:', error);
        alert("Erro ao cadastrar intérprete. Tente novamente.");
      }
    );
  }
}
