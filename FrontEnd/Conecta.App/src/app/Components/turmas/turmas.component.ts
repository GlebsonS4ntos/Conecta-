import { TurmasService } from './turmas.service';
import { Component, OnInit } from '@angular/core';
import { Turma } from './Turma';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-turmas',
  templateUrl: 'turmas.component.html',
  styleUrls: ['turmas.component.css'],
})
export class TurmasComponent implements OnInit {
  formulario: FormGroup;
  tituloFormulario: string;
  turmas: Turma[];
  private _search: string = ''; //campodeBusca
  turmasFiltradas: Turma[]; //array de turmas que recebe o resultado da filtragem
  idDeletar: number = null;

  constructor(
    private turmasService: TurmasService,
    private toastr: ToastrService,
    private builder: FormBuilder
  ) {}

  public get search() {
    return this._search;
  }

  public set search(value: string) {
    this._search = value;
    this.turmasFiltradas = this.search? this.filtrarTurmas(this.search): this.turmas;
  }

  filtrarTurmas(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.turmas.filter(
      (turma: { codigoTurma: string }) =>
        turma.codigoTurma.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  alterarIdDeletar(id: any) {
    this.idDeletar = id;
    console.log(this.idDeletar);
  }

  ngOnInit(): void {
    this.getTurmas();
    this.formulario = this.builder.group({
      //forms controle são os inputs
      codigoTurma: new FormControl(null, [Validators.required])
    });
  }

  public getTurmas(): void {
    this.turmasService.PegarTodos().subscribe(
      resultado => {
        this.turmas = resultado,
        this.turmasFiltradas = this.turmas
      }
    );
  }

  ExibirModalCadastro(): void {
    this.tituloFormulario = 'Nova Turma: ';
    this.formulario = new FormGroup({
      //forms controle são os inputs
      codigoTurma: new FormControl(null),
    });
  }

  ExibirModalAtualizacao(turmaId): void {
    this.turmasService.PegarPeloId(turmaId).subscribe((resultado) => {
      this.tituloFormulario = `Atualizar: `;

      this.formulario = new FormGroup({
        //forms controle são os inputs
        turmaId: new FormControl(resultado.turmaId),
        codigoTurma: new FormControl(resultado.codigoTurma),
      });
    });
  }

  EnviarFormulario(): void {
    //criar as variaveis para ter os dados do form
    const turma: Turma = this.formulario.value;

    if (turma.turmaId > 0) {
      this.turmasService.AtualizarTurma(turma).subscribe((resultado) => {
        this.toastr.warning('Atualizado com Sucesso!');
        this.turmasService.PegarTodos().subscribe((registros) => {
          this.turmasFiltradas = registros;
        });
      });
    } else {
      this.turmasService.SalvarTurma(turma).subscribe((resultado) => {
        this.toastr.success('Inserido com Sucesso!');
        this.turmasService.PegarTodos().subscribe((registros) => {
          this.turmasFiltradas = registros;
        });
      });
    }
  }

  ExcluirTurma(deletar: number) {
    this.turmasService.ExcluirTurma(deletar).subscribe((resultado) => {
      this.toastr.error('Registro deletado');
      this.turmasService.PegarTodos().subscribe((registros) => {
        this.turmasFiltradas = registros;
      });
    });
  }
}
