import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {CadastroClienteComponent} from "../cadastro-cliente/cadastro-cliente.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router,
              private dialog: MatDialog) {
  }

  login() {
    if (this.username === "admin" && this.password === "123") {
      this.router.navigate(['/dados-interprete']);
      alert("Sucesso!!!");

    } else {
      alert("Credenciais inválidas. Tente novamente.");
    }
  }
  abrirCadastroModal(): void {
    const dialogRef = this.dialog.open(CadastroClienteComponent, {
      width: '340px', height: '446px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal fechado');
    });
  }

}
