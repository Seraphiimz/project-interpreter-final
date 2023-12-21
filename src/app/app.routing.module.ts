import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastroInterpreterComponent} from "./interpreter/cadastro-interpreter/cadastro-interpreter.component";
import {ListasInterpreterComponent} from "./interpreter/listas-interpreter/listas-interpreter.component";
import {PrincpalComponent} from "./interpreter/princpal/princpal.component";
import {LoginComponent} from "./interpreter/login/login.component";
import {CadastroClienteComponent} from "./interpreter/cadastro-cliente/cadastro-cliente.component";
import {DadosInterpreteComponent} from "./interpreter/dados-interprete/dados-interprete.component";
import {EdicaoInterpreterComponent} from "./interpreter/edicao-interpreter/edicao-interpreter.component";

const routes: Routes = [
  {
    path: "principal",
    component: PrincpalComponent,
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "dados-interprete",
    component: DadosInterpreteComponent
  },
  {
    path: "register-interpreter",
    component:CadastroClienteComponent
  },

  {
    path: "listagem-interpreter",
    component: ListasInterpreterComponent
  },
  {
    path: "cadastro-interpreter",
    component: CadastroInterpreterComponent
  },

  {
    path: "edicao-interpreter/:id",
    component: EdicaoInterpreterComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
