import { VisualizarNotaComponent } from './Components/visualizar-nota/visualizar-nota.component';
import { LancarNotasComponent } from './Components/LancarNotas/LancarNotas.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { AlunoComponent } from './Components/aluno/aluno.component';
import { ProfessorComponent } from './Components/professor/professor.component';
import { MateriaComponent } from './Components/materia/materia.component';
import { TurmasComponent } from './Components/turmas/turmas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DuvidasComponent } from './Components/duvidas/duvidas.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LoginComponent } from './Components/login/login.component';
import { QuemSomosComponent } from './Components/quem-somos/quem-somos.component';
import { MateriaProfessorTurmaComponent } from './Components/materia-professor-turma/materia-professor-turma.component';

const routes: Routes = [
  {path: 'NavBar', component:NavBarComponent, children:[
    {path: 'NavBar/Login', component:LoginComponent}
  ]},
  {path: '', component:HomePageComponent},
  {path: 'QuemSomos', component:QuemSomosComponent},
  {path: 'NavBar/Login', component:LoginComponent},
  {path: 'Duvidas', component:DuvidasComponent},
  {path: 'Turmas', component:TurmasComponent},
  {path: 'Materia', component:MateriaComponent},
  {path: 'Professor', component:ProfessorComponent},
  {path: 'Aluno', component:AlunoComponent},
  {path: 'MateriaProfessorTurmas', component:MateriaProfessorTurmaComponent},
  {path: 'LancarNotas', component:LancarNotasComponent},
  {path: 'VisualizarNota', component:VisualizarNotaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
