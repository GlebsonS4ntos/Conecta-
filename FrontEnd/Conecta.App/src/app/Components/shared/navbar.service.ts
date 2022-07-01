import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private _visibilidadeNavBar: boolean = true;
  private _visibilidadeOpcoes: boolean = true;
  private _visibilidadeAluno: boolean = false;
  private _visibilidadeProfessor:boolean = false;
  private _visibilidadeAdm: boolean = false;
  constructor() { }

  public get visibilidadeNavBar(){
    return this._visibilidadeNavBar;
  }
  public set visibilidadeNavBar(b:boolean){
    this._visibilidadeNavBar = b;
  }
  public get visibilidadeAluno(){
    return this._visibilidadeAluno;
  }
  public set visibilidadeAluno(b:boolean){
    this._visibilidadeAluno = b;
  }
  public get visibilidadeProfessor(){
    return this._visibilidadeProfessor;
  }
  public set visibilidadeProfessor(b:boolean){
    this._visibilidadeProfessor = b;
  }
  public get visibilidadeAdm(){
    return this._visibilidadeAdm;
  }
  public set visibilidadeAdm(b:boolean){
    this._visibilidadeAdm = b;
  }
  public get visibilidadeOpcoes(){
    return this._visibilidadeOpcoes;
  }
  public set visibilidadeOpcoes(b:boolean){
    this._visibilidadeOpcoes = b;
  }
}
