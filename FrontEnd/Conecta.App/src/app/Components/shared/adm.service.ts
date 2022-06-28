import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Adm } from './Adm';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AdmService {
  url = 'https://localhost:44385/api/Adms';

  constructor(private http: HttpClient){}
    //primeiro método
    PegarTodos(): Observable<Adm[]>{
      return this.http.get<Adm[]>(this.url);
    }
}
