import { TurmasService } from './../turmas/turmas.service';
import { ProfessorService } from './../professor/professor.service';
import { MateriaService } from './../materia/materia.service';
import { Turma } from './../turmas/Turma';
import { Professor } from './../professor/Professor';
import { Materia } from './../materia/Materia';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { materiaProfessorTurma } from './materiaProfessorTurma';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MateriaProfessorTurmaService } from './materia-professor-turma.service';

@Component({
  selector: 'app-materia-professor-turma',
  templateUrl: 'materia-professor-turma.component.html',
  styleUrls: ['materia-professor-turma.component.css'],
})
export class MateriaProfessorTurmaComponent implements OnInit {
  formulario: any = [];
  tituloFormulario: string;
  materiaProfessorTurmas: materiaProfessorTurma[];
  materiaProfessorTurmasFiltrados: materiaProfessorTurma[];
  materias : Materia[];
  professores : Professor[];
  turmas: Turma[];

  idDeletar: number = null;

  alterarIdDeletar(id: any) {
    this.idDeletar = id;
    console.log(this.idDeletar);
  }

  constructor(
    private materiaProfessorTurmaService: MateriaProfessorTurmaService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private materiaService : MateriaService,
    private professorService : ProfessorService,
    private turmasService : TurmasService
  ) {}

  ngOnInit(): void {
      this.getMateriaProfessorTurmas();
      this.formulario = this.formBuilder.group({
        //inicializando o formulario
        materiaProfessorTurmaId: new FormControl(0),
        materiaId: new FormControl(null,[Validators.required]),
        turmaId: new FormControl(null, [Validators.required]),
        professorId: new FormControl(null, [Validators.required])
      })
  }
  public getMateriaProfessorTurmas(): void {
    this.materiaProfessorTurmaService.PegarTodos().subscribe(
      resultado => {
        this.materiaProfessorTurmas = resultado,
        this.materiaProfessorTurmasFiltrados = this.materiaProfessorTurmas
      }
    );
    this.materiaService.PegarTodos().subscribe(
      resultado => {
        this.materias = resultado
      }
    );
    this.professorService.PegarTodos().subscribe(
      resultado => {
        this.professores = resultado
      }
    );
    this.turmasService.PegarTodos().subscribe(
      resultado => {
        this.turmas = resultado
      }
    );
  }
  ExibirModalCadastro(): void {
    this.tituloFormulario = 'Nova MateriaProfessorTurma';
    this.formulario = new FormGroup({
      //forms controle são os inputs
      materiaId: new FormControl(null),
      professorId: new FormControl(null),
      turmaId: new FormControl(null)
    });
  }
  ExibirModalAtualizacao(materiaProfessorTurmaId): void {
    this.materiaProfessorTurmaService.PegarPeloId(materiaProfessorTurmaId).subscribe(resultado => {
      this.tituloFormulario = `Atualizar: `;
      this.formulario = new FormGroup({
        //forms controle (imputs) recebendo o valor da materia
        materiaProfessorTurmaId: new FormControl(resultado.materiaProfessorTurmaId),
        turmaId: new FormControl(resultado.turmaId),
        materiaId: new FormControl(resultado.materiaId),
        professorId: new FormControl(resultado.professorId)
      });
    });
  }
  EnviarFormulario(): void {
    //criar as variaveis para ter os dados do form
    const materiaProfessorTurma: materiaProfessorTurma = this.formulario.value;
    if (materiaProfessorTurma.materiaProfessorTurmaId != null) {
      this.materiaProfessorTurmaService.AtualizarMateriaProfessorTurma(materiaProfessorTurma).subscribe(resultado => {
        this.toastr.warning('Atualizado com Sucesso!');
        this.materiaProfessorTurmaService.PegarTodos().subscribe((registros) => {
          this.materiaProfessorTurmasFiltrados = registros;
        });
      });
    } else {
      this.materiaProfessorTurmaService.SalvarMateriaProfessorTurma(materiaProfessorTurma).subscribe((resultado) => {
        this.toastr.success('Inserido com Sucesso!');
        this.materiaProfessorTurmaService.PegarTodos().subscribe((registros) => {
          this.materiaProfessorTurmasFiltrados = registros;
        });
      });
    }
  }

  ExcluirMateriaProfessorTurma(deletar:number) {
    this.materiaProfessorTurmaService.ExcluirMateriaProfessorTurma(deletar).subscribe((resultado) => {
      this.toastr.error('Registro deletado');
      this.materiaProfessorTurmaService.PegarTodos().subscribe((registros) => {
        this.materiaProfessorTurmasFiltrados = registros;
      });
    });
  }
}

