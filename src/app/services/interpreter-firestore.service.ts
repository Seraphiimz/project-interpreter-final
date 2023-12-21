import { Injectable } from '@angular/core';
import {from, Observable} from "rxjs";
import {Interpreter_user} from "../shared/model/interpreter_user";
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InterpreterFirestoreService {
  colecaoInterprete: AngularFirestoreCollection<Interpreter_user>;
  NOME_COLECAO = 'interpretes';

  constructor(private afs: AngularFirestore) {
    this.colecaoInterprete = afs.collection(this.NOME_COLECAO);
  }

  apagar(id: string): Observable<void> {
    return from(this.colecaoInterprete.doc(id).delete());
  }

  listar(): Observable<Interpreter_user[]> {
    // usando options para idField para mapear o id gerado pelo firestore para o campo id de usuário
    return this.colecaoInterprete.valueChanges({idField: 'id'});
  }

}




