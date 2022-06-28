import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from './Professor';


const httpOptions = {
  headers: new HttpHeaders({
    'content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  url = 'https://localhost:44385/api/Professores';

  constructor(private http: HttpClient){}
    //primeiro método
    PegarTodos(): Observable<Professor[]>{
      return this.http.get<Professor[]>(this.url);
    }

    //segundo metodo
    PegarPeloId(professorId: number): Observable<Professor>{
      const apiUrl  = `${this.url}/${professorId}`;
      return this.http.get<Professor>(apiUrl);
    }

    //terceiro Metodo
    SalvarProfessor(professor : Professor): Observable<any>{
      return this.http.post<Professor>(this.url, professor, httpOptions);
    }

    //quarto metodo
    AtualizarProfessor(professor: Professor): Observable<any> {
      return this.http.put<Professor>(this.url, professor, httpOptions);
    }

    //excluir
    ExcluirProfessor(professorId: number):Observable<any>{
      const apiUrl = `${this.url}/${professorId}`;
      return this.http.delete<number>(apiUrl, httpOptions);
    }
}
