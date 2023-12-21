import { Injectable } from '@angular/core';
import {Interpreter_user} from "../shared/model/interpreter_user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterpreterService {
  INTERPRETER_API = "http://localhost:3000/interprete";

  constructor(private httpClient: HttpClient) { }

  remover(interpr: Interpreter_user): Observable<Interpreter_user>{
    return this.httpClient.delete<Interpreter_user>(`${this.INTERPRETER_API}/${interpr.id}`);
  }

  cadastrar_interpreter(interpr: Interpreter_user): Observable<Interpreter_user>{
    console.log(interpr)
    return this.httpClient.post<Interpreter_user>(this.INTERPRETER_API, interpr);
  }

  pesquisar_Matricula_Interpreter(matricula: string): Observable<Interpreter_user[]>{
    return this.httpClient.get<Interpreter_user[]>(`${this.INTERPRETER_API}?matricula=${matricula}`);
  }

  pesquisarPorId(id: string): Observable<Interpreter_user> {
    return this.httpClient.get<Interpreter_user>(`${this.INTERPRETER_API}/${id}`);
  }

  listas_interpreter(){
    return this.httpClient.get(this.INTERPRETER_API);
  }

  atulizar(interpr: Interpreter_user): Observable<Interpreter_user>{
    console.log(interpr)
    return this.httpClient.put<Interpreter_user>(`${this.INTERPRETER_API}/${interpr.id}`, interpr);
  }

  buscarInterpreter(nome: string): Observable<any[]> {
    const url = `${this.INTERPRETER_API}?nome=${nome}`;
    return this.httpClient.get<any[]>(url);
  }

  registerInterpreter(nome: string, email: string, password: string): Observable<any> {
    const interpreterData = { nome: nome, email: email, password: password };
    return this.httpClient.post<any>(`${this.INTERPRETER_API}/register`, interpreterData);
  }

  salvarEdicao(id: number, updatedInterpreter: Partial<Interpreter_user>): Observable<Interpreter_user> {
    const url = `${this.INTERPRETER_API}/${id}`;
    return this.httpClient.put<Interpreter_user>(url, updatedInterpreter);
  }
}
