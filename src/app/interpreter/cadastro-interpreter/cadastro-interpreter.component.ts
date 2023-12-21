import { Component } from '@angular/core';
import {Interpreter_user} from "../../shared/model/interpreter_user";
import {InterpreterService} from "../../services/interpreter.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";
import {IMensagem} from "../../shared/model/imensagem";
import {findLastMappingIndexBefore} from "@angular/compiler-cli/src/ngtsc/sourcemaps/src/source_file";

@Component({
  selector: 'app-cadastro-interpreter',
  templateUrl: './cadastro-interpreter.component.html',
  styleUrls: ['./cadastro-interpreter.component.css']
})
export class CadastroInterpreterComponent {

  readonly cadastrar = 'cadastrar';
  readonly atualizar = 'atualizar';
  interpreterTratamento: Interpreter_user;
  mensagemErro = '';
  estahCadastrando = true;
  botao = this.cadastrar;

  constructor(private interpreterService: InterpreterService,
              private rotaAtivada: ActivatedRoute,
              private roteador: Router,
              private mensagemService: IMensagem,
              public dialogRef: MatDialogRef<CadastroInterpreterComponent>) {

    const idEdicao = this.rotaAtivada.snapshot.params['id'];
    this.interpreterTratamento = new Interpreter_user(0, '', '', '', '', 0, '', '', false);

    if (idEdicao){
      this.estahCadastrando = false;
      this.interpreterService.pesquisarPorId(idEdicao).subscribe(interpreterRetornado => {
        this.interpreterTratamento = interpreterRetornado;
      });
    }
    this.botao = this.estahCadastrando ? this.cadastrar: this.atualizar;
  }

  close(): void {
    this.dialogRef.close();
  }

  cadastrar_interpreter(): void {
    if (this.estahCadastrando) {
      this.interpreterService.cadastrar_interpreter(this.interpreterTratamento).subscribe(interpreterCadastrado => {
          this.roteador.navigate(['/listagem-interpreter']);
        }
      );
    }
  }
}
