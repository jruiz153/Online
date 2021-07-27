import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  private url = environment.url;
  private url_olc = environment.url_olc;

  constructor(private http: HttpClient) { }

  //estadistica reparto
  getEstadisticaReparto(data){
    return this.http.post(`${ this.url_olc }/GetEstadisticaReparto/`, data);
  }

  getDetalleEstadisticaReparto(data){
    return this.http.post(`${ this.url_olc }/GetDetalleEstadisticaReparto/`, data);
  }
}
