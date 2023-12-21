import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CadastroInterpreterComponent} from "./cadastro-interpreter/cadastro-interpreter.component";
import {ListasInterpreterComponent} from "./listas-interpreter/listas-interpreter.component";
import {PipesModule} from "../shared/pipes/pipes.module";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PrincpalComponent } from './princpal/princpal.component';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatRadioModule} from "@angular/material/radio";
import {MatChipsModule} from "@angular/material/chips";
import { EdicaoInterpreterComponent } from './edicao-interpreter/edicao-interpreter.component';
import { SuporteInterpreterComponent } from './suporte-interpreter/suporte-interpreter.component';
import { LoginComponent } from './login/login.component';
import { BuscarComponent } from './buscar/buscar.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { DadosInterpreteComponent } from './dados-interprete/dados-interprete.component';
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [
    CadastroInterpreterComponent,
    ListasInterpreterComponent,
    PrincpalComponent,
    EdicaoInterpreterComponent,
    SuporteInterpreterComponent,
    LoginComponent,
    BuscarComponent,
    CadastroClienteComponent,
    DadosInterpreteComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatRadioModule,
    MatChipsModule,
    MatListModule,

  ],
  exports: [
    CadastroInterpreterComponent,
    ListasInterpreterComponent,
    PrincpalComponent,
    DadosInterpreteComponent,
    EdicaoInterpreterComponent
  ]
})
export class InterpreterModule { }
