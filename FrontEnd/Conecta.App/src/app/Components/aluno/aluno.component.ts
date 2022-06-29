import { TurmasService } from './../turmas/turmas.service';
import { Turma } from './../turmas/Turma';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Aluno } from './Aluno';
import { AlunoService } from './aluno.service';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import { Validacoes } from '../shared/validacoes';


@Component({
  selector: 'app-aluno',
  templateUrl: 'aluno.component.html',
  styleUrls: ['aluno.component.css'],
})
export class AlunoComponent implements OnInit {
  formulario: any;
  tituloFormulario: string;
  alunos: Aluno[];
  alunosFiltrados: Aluno[];
  turmas!: Turma[];
  private _search: string = '';

  idDeletar: number = null;

  public get search() {
    return this._search;
  }

  public set search(value: string) {
    this._search = value;
    this.alunosFiltrados = this.search
      ? this.filtrarAlunos(this.search)
      : this.alunos;
  }

  filtrarAlunos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.alunos.filter(
      (aluno: { nome: string, cpf : string, cidade: string}) =>
        aluno.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
        aluno.cpf.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
        aluno.cidade.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  alterarIdDeletar(id: any) {
    this.idDeletar = id;
    console.log(this.idDeletar);
  }

  constructor(
    private alunoService: AlunoService,
    private toastr: ToastrService,
    private turmasService: TurmasService
  ) {}
  public get propriedade(){
    return this.formulario.controls;
  }

  ngOnInit(): void {
    this.getAlunos();
    this.turmasService.PegarTodos().subscribe(
      resultado =>{
      this.turmas = resultado
      }
    );
    this.formulario = new FormGroup({
      alunoId: new FormControl(0),
      nome: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ]),
      cpf: new FormControl(null, [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
        Validacoes.isValidCpf()
      ]),
      cep: new FormControl(null, [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9)
      ]),
      endereco: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30)
      ]),
      bairro: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30)
      ]),
      cidade: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30)
      ]),
      dataNasc: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(15)
      ]),
      telefone: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(20)
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50)
      ]),
      senha: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)
      ]),
      turmaId: new FormControl(0)
    });
  }

  public getAlunos(): void {
    this.alunoService.PegarTodos().subscribe(
      resultado => {
        this.alunos = resultado,
        this.alunosFiltrados = this.alunos
      }
    );
  }

  ExibirModalCadastro(): void {
    this.tituloFormulario = 'Novo Aluno';
    this.formulario = new FormGroup({
      //forms controle são os inputs
      nome: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ]),
      cpf: new FormControl(null, [
        Validators.required,
        Validacoes.isValidCpf()
      ]),
      cep: new FormControl(null, [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9)
      ]),
      endereco: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30)
      ]),
      bairro: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30)
      ]),
      cidade: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30)
      ]),
      dataNasc: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(15)
      ]),
      telefone: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(20)
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50)
      ]),
      senha: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)
      ]),
      turmaId: new FormControl(0)
      });
  }
  ExibirModalAtualizacao(alunoId): void {
    this.alunoService.PegarPeloId(alunoId).subscribe((resultado) => {
      this.tituloFormulario = `Atualizar: `;
      this.formulario = new FormGroup({
        //forms controle são os inputs
        alunoId: new FormControl(resultado.alunoId),
        nome: new FormControl(resultado.nome, [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30)
        ]),
        cpf: new FormControl(resultado.cpf, [
          Validators.required,
          Validators.minLength(14),
          Validators.maxLength(14),
          Validacoes.isValidCpf()
        ]),
        cep: new FormControl(resultado.cep, [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(9)
        ]),
        endereco: new FormControl(resultado.endereco, [
          Validators.required,
          Validators.maxLength(30)
        ]),
        bairro: new FormControl(resultado.bairro, [
          Validators.required,
          Validators.maxLength(30)
        ]),
        cidade: new FormControl(resultado.cidade, [
          Validators.required,
          Validators.maxLength(30)
        ]),
        dataNasc: new FormControl(resultado.dataNasc, [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(15)
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
          Validators.minLength(6),
          Validators.maxLength(10)
        ]),
        turmaId: new FormControl(0)
      });
    });
  }
  EnviarFormulario(): void {
    //criar a variavel para ter os dados do form
    const aluno: Aluno = this.formulario.value;
    if (aluno.alunoId > 0) {
      this.alunoService.AtualizarAluno(aluno).subscribe((resultado) => {
        this.toastr.warning('Atualizado com Sucesso!');
        this.alunoService.PegarTodos().subscribe((registros) => {
          this.alunosFiltrados = registros;
        });
      });
    } else {
      this.alunoService.SalvarAluno(aluno).subscribe((resultado) => {
        this.toastr.success('Inserido com Sucesso!');
        this.alunoService.PegarTodos().subscribe((registros) => {
          this.alunosFiltrados = registros;
        });
      });
    }
  }
  ExcluirAluno(deletar:number) {
    this.alunoService.ExcluirAluno(deletar).subscribe((resultado) => {
      this.toastr.error('Registro deletado');
      this.alunoService.PegarTodos().subscribe((registros) => {
        this.alunosFiltrados = registros;
      });
    });
  }
}
function inline(arg0: { format: string; startDate: string; }) {
  throw new Error('Function not implemented.');
}

