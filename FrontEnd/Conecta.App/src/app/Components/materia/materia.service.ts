import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materia } from './Materia';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  url = 'https://localhost:44385/api/Materias';

  constructor(private http: HttpClient){}
    //primeiro método
    PegarTodos(): Observable<Materia[]>{
      return this.http.get<Materia[]>(this.url);
    }

    //segundo metodo
    PegarPeloId(materiaId: number): Observable<Materia>{
      const apiUrl  = `${this.url}/${materiaId}`;
      return this.http.get<Materia>(apiUrl)
    }

    //terceiro Metodo
    SalvarMateria(materia: Materia): Observable<any>{
      return this.http.post<Materia>(this.url, materia, httpOptions);
    }

    //quarto metodo
    AtualizarMateria(materia: Materia): Observable<any> {
      return this.http.put<Materia>(this.url, materia, httpOptions);
    }

    //excluir
    ExcluirMateria(materiaId: number):Observable<any>{
      const apiUrl = `${this.url}/${materiaId}`;
      return this.http.delete<number>(apiUrl, httpOptions);
    }
}
