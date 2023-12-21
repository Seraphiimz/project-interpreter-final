import { Component } from '@angular/core';
import {InterpreterService} from "../../services/interpreter.service";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  searchName: string = '';
  searchResults: any[] = [];

  constructor(private interpreterService: InterpreterService) {}

  search() {
    this.interpreterService.buscarInterpreter(this.searchName).subscribe(
      (results: any[]) => {
        this.searchResults = results;
      },
      error => {
        console.error('Erro ao buscar usuários:', error);
      }
    );
  }
}
