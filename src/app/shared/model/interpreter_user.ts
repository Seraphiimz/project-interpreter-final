export class Interpreter_user{

  id: number
  nome: string
  matricula: string
  email: string
  turno: string
  telefone: number
  horario: string
  perfilImg: string;
  online: boolean

  constructor(id: number, nome: string,  matricula: string,  email: string,turno: string,  telefone: number, horario: string, perfilImg: string, online: boolean){

    this.id = id;
    this.nome = nome;
    this.matricula = matricula;
    this.email = email;
    this.turno = turno
    this.telefone = telefone;
    this.horario = horario;
    this.perfilImg = perfilImg;
    this.online = online;
  }
}
