import { NavBarComponent } from './../nav-bar/nav-bar.component';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Professor } from './../professor/Professor';
import { Aluno } from './../aluno/Aluno';
import { AdmService } from './../shared/adm.service';
import { AlunoService } from './../aluno/aluno.service';
import { ProfessorService } from './../professor/professor.service';
import { Component, Input, OnInit } from '@angular/core';
import { Adm } from '../shared/Adm';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})

export class LoginComponent implements OnInit {
  alunosLista: Aluno[];
  professorLista: Professor[];
  admLista : Adm[];
  email: string;
  password: string;
  userValido: boolean = false;
  loginLoad: boolean = false;
  valorSelect: number;
  botao = true;
  aluno: Aluno;
  adm: Adm;
  professor: Professor;
  @Input() navbarVisible: boolean;

  constructor(private admService : AdmService,
    private professorService:ProfessorService,
    private alunoService:AlunoService,
    private router: Router,
    private toastr: ToastrService ) {}

  ngOnInit(): void{
    this.navbarVisible = false;
  }

  login():void {
    if(this.valorSelect == 3){
      this.admService.PegarTodos().subscribe((data) => {
        this.admLista = data;
        for (let i = 0; i < this.admLista.length; i++) {
          if (this.admLista[i].user.toLowerCase() == this.email.toLowerCase() &&
          this.admLista[i].password.toLocaleLowerCase() == this.password.toLocaleLowerCase()){
            this.adm = this.admLista[i];
            this.userValido = true;
            this.loginLoad = true;
            this.botao = false;
            setTimeout(() => {
              this.router.navigate(['']);
            }, 2000,  this.toastr.success('Logado com Sucesso'));
          }
        }
        if (this.userValido == false) {
          this.userValido = false;
          this.toastr.error('Dados Incorretos !!');
        }
      });
    }
    if(this.valorSelect == 2){
      this.professorService.PegarTodos().subscribe((data) => {
        this.professorLista = data;
        for (let i = 0; i < this.professorLista.length; i++) {
          if (this.professorLista[i].email.toLowerCase() == this.email.toLowerCase() &&
          this.professorLista[i].senha.toLocaleLowerCase() == this.password.toLocaleLowerCase()){
            this.professor = this.professorLista[i];
            localStorage.setItem('idProfessor', this.professor.professorId.toString())
            this.userValido = true;
            this.loginLoad = true;
            this.botao = false;
            setTimeout(() => {
              this.router.navigate(['']);
            }, 2000,  this.toastr.success('Logado com Sucesso'));
          }
        }
        if (this.userValido == false) {
          this.userValido = false;
          this.toastr.error('Dados Incorretos !!');
        }
      });
    }
    if(this.valorSelect == 1){
      this.alunoService.PegarTodos().subscribe((data) => {
        this.alunosLista = data;
        for (let i = 0; i < this.alunosLista.length; i++) {
          if (this.alunosLista[i].email.toLowerCase() == this.email.toLowerCase() &&
          this.alunosLista[i].senha.toLocaleLowerCase() == this.password.toLocaleLowerCase()){
            this.aluno = this.alunosLista[i];
            const emailUsuario = this.aluno.nome
            localStorage.setItem('EmailUsuarioLogado', emailUsuario);

            this.userValido = true;
            this.loginLoad = true;
            this.botao = false;
            setTimeout(() => {
              this.router.navigate(['']);
            }, 2000,  this.toastr.success('Logado com Sucesso'));
          }
        }
        if (this.userValido == false) {
          this.userValido = false;
          this.toastr.error('Dados Incorretos !!');
        }
      });
    }
  }
}
