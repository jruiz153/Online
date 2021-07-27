import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuiaService {
  private url = environment.url;
  private url_olc = environment.url_olc;
  
  constructor(private http: HttpClient) { }

  consultarGuiaAnular(id: string): Observable<any[]>{
    return this.http.get<any[]>(`${ this.url_olc }/GetCiudadesLetra/${ id }`);
  }

}
