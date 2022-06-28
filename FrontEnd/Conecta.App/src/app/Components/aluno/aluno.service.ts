import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from './Aluno';



const httpOptions = {
  headers: new HttpHeaders({
    'content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  url = 'https://localhost:44385/api/Alunos';

  constructor(private http: HttpClient){}
    //primeiro método
    PegarTodos(): Observable<Aluno[]>{
      return this.http.get<Aluno[]>(this.url);
    }

    //segundo metodo
    PegarPeloId(alunoId: number): Observable<Aluno>{
      const apiUrl  = `${this.url}/${alunoId}`;
      return this.http.get<Aluno>(apiUrl);
    }

    //terceiro Metodo
    SalvarAluno(aluno: Aluno): Observable<any>{
      return this.http.post<Aluno>(this.url, aluno, httpOptions);
    }

    //quarto metodo
    AtualizarAluno(aluno: Aluno): Observable<any> {
      return this.http.put<Aluno>(this.url, aluno, httpOptions);
    }

    //excluir
    ExcluirAluno(alunoId: number):Observable<any>{
      const apiUrl = `${this.url}/${alunoId}`;
      return this.http.delete<number>(apiUrl, httpOptions);
    }
}

