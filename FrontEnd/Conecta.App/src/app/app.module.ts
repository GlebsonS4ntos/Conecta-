import { MateriaComponent } from './Components/materia/materia.component';
import { MateriaService } from './Components/materia/materia.service';
import { TurmasService } from './Components/turmas/turmas.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { RodapeComponent } from './Components/rodape/rodape.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { QuemSomosComponent } from './Components/quem-somos/quem-somos.component';
import { DuvidasComponent } from './Components/duvidas/duvidas.component';
import { LoginComponent } from './Components/login/login.component';
import { TurmasComponent } from './Components/turmas/turmas.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { ProfessorComponent } from './Components/professor/professor.component';
import { ProfessorService } from './Components/professor/professor.service';
import { AlunoComponent } from './Components/aluno/aluno.component';
import { AlunoService } from './Components/aluno/aluno.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RodapeComponent,
    HomePageComponent,
    QuemSomosComponent,
    DuvidasComponent,
    LoginComponent,
    TurmasComponent,
    MateriaComponent,
    ProfessorComponent,
    AlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(
      {
        timeOut: 4000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
        progressBar: true,
        closeButton: true
      }
    )
  ],
  providers: [HttpClientModule, TurmasService, MateriaService, ProfessorService, AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
