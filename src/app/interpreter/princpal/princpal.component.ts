
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {CadastroInterpreterComponent} from "../cadastro-interpreter/cadastro-interpreter.component";
import {ListasInterpreterComponent} from "../listas-interpreter/listas-interpreter.component";
import {Interpreter_user} from "../../shared/model/interpreter_user";
import {InterpreterService} from "../../services/interpreter.service";
import {Router} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {SuporteInterpreterComponent} from "../suporte-interpreter/suporte-interpreter.component";
import {UsusarioInterprete} from "../../shared/model/ususarioInterprete";
import {BuscarComponent} from "../buscar/buscar.component";
@Component({
  selector: 'app-princpal',
  templateUrl: './princpal.component.html',
  styleUrls: ['./princpal.component.css']
})
export class PrincpalComponent implements OnInit {
  interpretes: Interpreter_user[] = [];
  usuarios: UsusarioInterprete[] = [];
  listInterpretes: any;

  constructor(
    private interprete_service: InterpreterService,
    private roteador: Router,
    private dialog: MatDialog){}

  ngOnInit() {
    this.interprete_service.listas_interpreter().subscribe(
      response => {
        this.listInterpretes = response;
      }
    )
  }

  openCadastroModal(): void {
    const dialogRef = this.dialog.open(CadastroInterpreterComponent, {
      width: '500px', height: '488px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal fechado');
    });
  }
  abrirModal(id: string): void {
    this.dialog.open(ListasInterpreterComponent, {
      width: '400px',
      data: {id: id},
    });
  }
  abrirLoginModal(): void {
    this.dialog.open(LoginComponent, {
      width: '340px', height: '348px',
    });

  }
  abrirSuporteModal(): void {
    this.dialog.open(SuporteInterpreterComponent, {
      width: '400px'
    });
  }

  abrirBuscarModal(): void{
    this.dialog.open(BuscarComponent,{
      width:'400px', height:'183px'
    })
  }
}
