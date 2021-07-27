import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColaService {
  private url = environment.url;
  private url_olc = environment.url_olc;

  constructor(private http: HttpClient) { }

  getColImpresion(data): Observable<any[]>{
    return this.http.post<any[]>(`${ this.url_olc }/GetColaImpresion/`, data );
  }
}
