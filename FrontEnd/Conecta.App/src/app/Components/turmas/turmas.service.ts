import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Turma } from './Turma';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TurmasService {
  url = 'https://localhost:44385/api/Turmas';

  constructor(private http: HttpClient){}
    //primeiro método
    PegarTodos(): Observable<Turma[]>{
      return this.http.get<Turma[]>(this.url);
    }

    //segundo metodo
    PegarPeloId(turmaId: number): Observable<Turma>{
      const apiUrl  = `${this.url}/${turmaId}`;
      return this.http.get<Turma>(apiUrl)
    }

    //terceiro Metodo
    SalvarTurma(turma: Turma): Observable<any>{
      return this.http.post<Turma>(this.url, turma, httpOptions);
    }

    //quarto metodo
    AtualizarTurma(turma: Turma): Observable<any> {
      return this.http.put<Turma>(this.url, turma, httpOptions);
    }

    //excluir
    ExcluirTurma(turmaId: number):Observable<any>{
      const apiUrl = `${this.url}/${turmaId}`;
      return this.http.delete<number>(apiUrl, httpOptions);
  }
}
