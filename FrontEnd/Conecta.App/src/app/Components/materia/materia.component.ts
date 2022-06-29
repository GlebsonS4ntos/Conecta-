import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Materia } from './Materia';
import { MateriaService } from './materia.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-materia',
  templateUrl: 'materia.component.html',
  styleUrls: ['materia.component.css'],
})
export class MateriaComponent implements OnInit {
  formulario: any = [];
  tituloFormulario: string;
  materias: Materia[];
  materiasFiltrados: Materia[];
  private _search: string = '';
  idDeletar: number = null;

  public get search() {
    return this._search;
  }

  public set search(value: string) {
    this._search = value;
    this.materiasFiltrados = this.search? this.filtrarMaterias(this.search): this.materias;
  }

  filtrarMaterias(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.materias.filter(
      (materia: { nome: string}) =>
        materia.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  alterarIdDeletar(id: any) {
    this.idDeletar = id;
    console.log(this.idDeletar);
  }

  constructor(
    private materiaService: MateriaService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  public get propriedade(){
    return this.formulario.controls;
  }

  ngOnInit(): void {
    this.getMaterias();
    this.formulario = new FormGroup({
      //forms controle são os inputs
      nome: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]),
    });
  }

  public getMaterias(): void {
    this.materiaService.PegarTodos().subscribe(
      resultado => {
        this.materias = resultado,
        this.materiasFiltrados = this.materias
      }
    );
  }

  ExibirModalCadastro(): void {
    this.tituloFormulario = 'Nova Materia';
    this.formulario = new FormGroup({
      //forms controle são os inputs
      nome: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)])
    });
  }
  ExibirModalAtualizacao(materiaId): void {
    this.materiaService.PegarPeloId(materiaId).subscribe(resultado => {
      this.tituloFormulario = `Atualizar: `;

      this.formulario = new FormGroup({
        //forms controle (imputs) recebendo o valor da materia
        materiaId: new FormControl(resultado.materiaId),
        nome: new FormControl(resultado.nome, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30)
        ]),
      });
    });
  }
  EnviarFormulario(): void {
    //criar as variaveis para ter os dados do form
    const materia: Materia = this.formulario.value;
    if (materia.materiaId > 0) {
      this.materiaService.AtualizarMateria(materia).subscribe(resultado => {
        this.toastr.warning('Atualizado com Sucesso!');
        this.materiaService.PegarTodos().subscribe((registros) => {
          this.materiasFiltrados = registros;
        });
      });
    } else {
      this.materiaService.SalvarMateria(materia).subscribe((resultado) => {
        this.toastr.success('Inserido com Sucesso!');
        this.materiaService.PegarTodos().subscribe((registros) => {
          this.materiasFiltrados = registros;
        });
      });
    }
  }

  ExcluirMateria(deletar:number) {
    this.materiaService.ExcluirMateria(deletar).subscribe((resultado) => {
      this.toastr.error('Registro deletado');
      this.materiaService.PegarTodos().subscribe((registros) => {
        this.materiasFiltrados = registros;
      });
    });
  }
}
