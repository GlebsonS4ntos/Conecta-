import { MateriaProfessorTurmaComponent } from './materia-professor-turma.component';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { materiaProfessorTurma } from './materiaProfessorTurma';


const httpOptions = {
  headers: new HttpHeaders({
    'content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MateriaProfessorTurmaService {
  url = 'https://localhost:44385/api/MateriaProfessorTurmas';

  constructor(private http: HttpClient){}
    //primeiro método
    PegarTodos(): Observable<materiaProfessorTurma[]>{
      return this.http.get<materiaProfessorTurma[]>(this.url);
    }

    //segundo metodo
    PegarPeloId(materiaProfessorTurmaId: number): Observable<materiaProfessorTurma>{
      const apiUrl  = `${this.url}/${materiaProfessorTurmaId}`;
      return this.http.get<materiaProfessorTurma>(apiUrl)
    }

    //terceiro Metodo
    SalvarMateriaProfessorTurma(materiaProfessorTurma: materiaProfessorTurma): Observable<any>{
      return this.http.post<materiaProfessorTurma>(this.url, materiaProfessorTurma, httpOptions);
    }

    //quarto metodo
    AtualizarMateriaProfessorTurma(materiaProfessorTurma: materiaProfessorTurma): Observable<any> {
      return this.http.put<materiaProfessorTurma>(this.url, materiaProfessorTurma, httpOptions);
    }

    //excluir
    ExcluirMateriaProfessorTurma(materiaProfessorTurmaId: number):Observable<any>{
      const apiUrl = `${this.url}/${materiaProfessorTurmaId}`;
      return this.http.delete<number>(apiUrl, httpOptions);
    }
}

