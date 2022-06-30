import { NotaService } from './../shared/nota.service';
import { Nota } from './../shared/Nota';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MateriaProfessorTurmaService } from './../materia-professor-turma/materia-professor-turma.service';
import { AlunoService } from './../aluno/aluno.service';
import { Aluno } from './../aluno/Aluno';
import { materiaProfessorTurma } from './../materia-professor-turma/materiaProfessorTurma';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Toast, ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-LancarNotas',
  templateUrl: './LancarNotas.component.html',
  styleUrls: ['./LancarNotas.component.css'],
})
export class LancarNotasComponent implements OnInit {
  materiaProfessorTurmas: materiaProfessorTurma[];
  alunos: Aluno[];
  alunosFiltrados: Aluno[];
  idTurma: number;
  private _valorSelected: materiaProfessorTurma;
  formularioNota: any = [];
  formularioNotaDetalhes: any = [];
  tituloFormulario: string;

  public get valorSelected() {
    return this._valorSelected;
  }

  public set valorSelected(m: materiaProfessorTurma) {
    this._valorSelected = m;
    this.alunosFiltrados = this.valorSelected
      ? this.filtrarMaterias(this.valorSelected.toString())
      : this.alunos;
  }

  get propriedade(){
    return this.formularioNota.controls;
  }

  constructor(
    private alunoService: AlunoService,
    private materiaProfessorTurmaService: MateriaProfessorTurmaService,
    private toastr: ToastrService,
    private notaService: NotaService
  ) {}

  ngOnInit() {
    this.getMateriaProfessorTurmas();
    this.getAlunos();
    this.formularioNota = new FormGroup({
      //forms controle são os inputs
      notaId:  new FormControl(0),
      alunoId: new FormControl(0),
      bimestre1: new FormControl(0, [Validators.required]),
      bimestre2: new FormControl(0, [Validators.required]),
      bimestre3: new FormControl(0, [Validators.required]),
      bimestre4: new FormControl(0, [Validators.required]),
      ano: new FormControl(null),
    });
  }

  public getAlunos(): void {
    this.alunoService.PegarTodos().subscribe((resultado) => {
      (this.alunos = resultado), (this.alunosFiltrados = this.alunos);
    });
  }

  filtrarMaterias(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.alunos.filter(
      (aluno: { turmaId: number }) =>
        aluno.turmaId
          .toString()
          .indexOf(this.valorSelected.turmaId.toString()) !== -1
    );
  }

  public getMateriaProfessorTurmas(): void {
    this.materiaProfessorTurmaService.PegarTodos().subscribe((resultado) => {
      this.materiaProfessorTurmas = resultado.filter(
        (materiaProfessorTurma: { professorId: number }) =>
          materiaProfessorTurma.professorId
            .toString()
            .indexOf(localStorage.getItem('idProfessor')) !== -1
      );
      console.log(this.materiaProfessorTurmas);
    });
  }

  ExibirModalNota(id: number): void {
    this.tituloFormulario = 'Novo Professor';
    this.formularioNota = new FormGroup({
      //forms controle são os inputs
      notaId:  new FormControl(0),
      alunoId: new FormControl(id),
      bimestre1: new FormControl(0, [Validators.required]),
      bimestre2: new FormControl(0, [Validators.required]),
      bimestre3: new FormControl(0, [Validators.required]),
      bimestre4: new FormControl(0, [Validators.required]),
      ano: new FormControl(null),
      materiaProfessorTurmaId : new FormControl(this.valorSelected)
    });
  }

  EnviarFormulario(): void {
    //criar a variavel para ter os dados do form
    const nota: Nota = this.formularioNota.value;
    {
      this.notaService.SalvarNota(nota).subscribe((resultado) => {
        this.toastr.success('Nota inserida com Sucesso!');
      });
    }
  }
}
