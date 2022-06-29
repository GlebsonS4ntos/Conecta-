import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Professor } from './Professor';
import { ProfessorService } from './professor.service';
import { FormControl, FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { Validacoes } from '../shared/validacoes';

@Component({
  selector: 'app-professor',
  templateUrl: 'professor.component.html',
  styleUrls: ['professor.component.css'],
})
export class ProfessorComponent implements OnInit {
  formulario: any = [];
  tituloFormulario: string;
  professores: Professor[];
  professoresFiltrados: Professor[];
  private _search: string = '';
  idDeletar: number = null;

  public get search() {
    return this._search;
  }

  public set search(value: string) {
    this._search = value;
    this.professoresFiltrados = this.search
      ? this.filtrarProfessores(this.search)
      : this.professores;
  }

  filtrarProfessores(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.professores.filter(
      (professor: { nome: string; cpf: string }) =>
        professor.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
        professor.cpf.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  alterarIdDeletar(id: any) {
    this.idDeletar = id;
    console.log(this.idDeletar);
  }

  constructor(
    private professorService: ProfessorService,
    private toastr: ToastrService,
    private builder: FormBuilder
  ) {}
  public get propriedade() {
    return this.formulario.controls;
  }

  ngOnInit(): void {
    this.getProfessores();
    this.formulario = new FormGroup({
      professorId: new FormControl(0),
      nome: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ]),
      telefone: new FormControl(null, [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(14)
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50)
      ]),
      senha: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]),
      cpf: new FormControl(null, [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
        Validacoes.isValidCpf()
      ]),
    });
  }

  public getProfessores(): void {
    this.professorService.PegarTodos().subscribe((resultado) => {
      (this.professores = resultado),
        (this.professoresFiltrados = this.professores);
    });
  }

  ExibirModalCadastro(): void {
    this.tituloFormulario = 'Novo Professor';
    this.formulario = new FormGroup({
      //forms controle são os inputs
      nome: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ]),
      telefone: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(20),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50),
        Validators.email,
      ]),
      senha: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ]),
       cpf: new FormControl(null, [
        Validators.required,
        Validacoes.isValidCpf(),
      ]),
    });
  }
  ExibirModalAtualizacao(professorId): void {
    this.professorService.PegarPeloId(professorId).subscribe((resultado) => {
      this.tituloFormulario = `Atualizar: `;
      this.formulario = new FormGroup({
        //forms controle são os inputs
        professorId: new FormControl(resultado.professorId),
        nome: new FormControl(resultado.nome, [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30)
        ]),
        telefone: new FormControl(resultado.telefone, [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(20)
        ]),
        email: new FormControl(resultado.email, [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(50)
        ]),
        senha: new FormControl(resultado.senha, [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10)
        ]),
        cpf: new FormControl(resultado.cpf, [
          Validators.required,
          Validators.minLength(14),
          Validators.maxLength(14),
          Validacoes.isValidCpf()
        ]),
      });
    });
  }
  EnviarFormulario(): void {
    //criar a variavel para ter os dados do form
    const professor: Professor = this.formulario.value;

    if (professor.professorId > 0) {
      this.professorService
        .AtualizarProfessor(professor)
        .subscribe((resultado) => {
          this.toastr.warning('Atualizado com Sucesso!');
          this.professorService.PegarTodos().subscribe((registros) => {
            this.professoresFiltrados = registros;
          });
        });
    } else {
      this.professorService
        .SalvarProfessor(professor)
        .subscribe((resultado) => {
          this.toastr.success('Inserido com Sucesso!');
          this.professorService.PegarTodos().subscribe((registros) => {
            this.professoresFiltrados = registros;
          });
        });
    }
  }
  ExcluirProfessor(deletar: number) {
    this.professorService.ExcluirProfessor(deletar).subscribe((resultado) => {
      this.toastr.error('Registro deletado');
      this.professorService.PegarTodos().subscribe((registros) => {
        this.professoresFiltrados = registros;
      });
    });
  }
}
