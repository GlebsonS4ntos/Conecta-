import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Aluno } from './Aluno';
import { AlunoService } from './aluno.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-aluno',
  templateUrl: 'aluno.component.html',
  styleUrls: ['aluno.component.css'],
})
export class AlunoComponent implements OnInit {
  formulario: FormGroup;
  tituloFormulario: string;
  alunos: Aluno[];
  alunosFiltrados: Aluno[];
  private _search: string = '';
  idDeletar: number = null;

  public get search() {
    return this._search;
  }

  public set search(value: string) {
    this._search = value;
    this.alunosFiltrados = this.search? this.filtrarAlunos(this.search): this.alunos;
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
    private builder : FormBuilder

  ) {}

  ngOnInit(): void {
    this.getAlunos();
    this.formulario = this.builder.group({
      alunoId: new FormControl(0),
      foto: new FormControl(null),
      nome: new FormControl(null),
      cpf: new FormControl(null),
      cep: new FormControl(null),
      endereco: new FormControl(null),
      bairro: new FormControl(null),
      cidade: new FormControl(null),
      dataNasc: new FormControl(null),
      telefone: new FormControl(null),
      email: new FormControl(null),
      senha: new FormControl(null)

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
      foto: new FormControl(null),
      nome: new FormControl(null),
      cpf: new FormControl(null),
      cep: new FormControl(null),
      endereco: new FormControl(null),
      bairro: new FormControl(null),
      cidade: new FormControl(null),
      dataNasc: new FormControl(null),
      telefone: new FormControl(null),
      email: new FormControl(null),
      senha: new FormControl(null)
    });
  }
  ExibirModalAtualizacao(alunoId): void {
    this.alunoService.PegarPeloId(alunoId).subscribe((resultado) => {
      this.tituloFormulario = `Atualizar: `;
      this.formulario = new FormGroup({
        //forms controle são os inputs
        alunoId: new FormControl(resultado.alunoId),
        foto: new FormControl(resultado.foto),
        nome: new FormControl(resultado.nome),
        cpf: new FormControl(resultado.cpf),
        cep: new FormControl(resultado.cep),
        endereco: new FormControl(resultado.endereco),
        bairro: new FormControl(resultado.bairro),
        cidade: new FormControl(resultado.cidade),
        dataNasc: new FormControl(resultado.dataNasc),
        telefone: new FormControl(resultado.telefone),
        email: new FormControl(resultado.email),
        senha: new FormControl(resultado.senha)

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

