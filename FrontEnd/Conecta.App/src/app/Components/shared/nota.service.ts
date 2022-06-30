import { Nota } from './Nota';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class NotaService {
  url = 'https://localhost:44385/api/Notas';

  constructor(private http: HttpClient){}
    //primeiro método
    PegarTodos(): Observable<Nota[]>{
      return this.http.get<Nota[]>(this.url);
    }

    //segundo metodo
    PegarPeloId(notaId: number): Observable<Nota>{
      const apiUrl  = `${this.url}/${notaId}`;
      return this.http.get<Nota>(apiUrl);
    }

    //terceiro Metodo
    SalvarNota(nota : Nota): Observable<any>{
      return this.http.post<Nota>(this.url, nota, httpOptions);
    }

    //quarto metodo
    AtualizarNota(nota: Nota): Observable<any> {
      return this.http.put<Nota>(this.url, nota, httpOptions);
    }

    //excluir
    ExcluirNota(notaId: number):Observable<any>{
      const apiUrl = `${this.url}/${notaId}`;
      return this.http.delete<number>(apiUrl, httpOptions);
    }
  }
