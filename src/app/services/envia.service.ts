import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServiciosModel } from '../models/servicios.model';
import { FormasPagoModel } from '../models/formas-pago.model';

@Injectable({
  providedIn: 'root'
})
export class EnviaService {
  private url = environment.url;
  private url_olc = environment.url_olc;

  constructor(protected http: HttpClient) { }

  getRegionales(){
    return this.http.get(`${ this.url }/getregionales/`);
  }

  getCiudades(): Observable<any[]>{
    return this.http.get<any[]>(`${ this.url }/GetCiudades/`);
  }

  getCiudadesLetra(id: string): Observable<any[]>{
    return this.http.get<any[]>(`${ this.url }/GetCiudadesLetra/${ id }`);
  }

  /*getFormasPagoCuenta(data){
    return this.http.post(`${ this.url_olc }/GetFormasPagoCuenta/`, data);
  }
   getServiciosCuenta(data){
    return this.http.post(`${ this.url_olc }/GetServiciosCuenta/`, data);
  } */

  getFormasPagoCuenta(data): Observable<FormasPagoModel[]>{
    return this.http.post<FormasPagoModel[]>(`${ this.url_olc }/GetFormasPagoCuenta/`, data);
  }

  getServiciosCuenta(data): Observable<ServiciosModel[]>{
    return this.http.post<ServiciosModel[]>(`${ this.url_olc }/GetServiciosCuenta/`, data);

  }
  liquidarEnvio(data) {
    return this.http.post('http://wsa/AplicacionWebPDSREST/Service1.svc/liquidacion/', data);
  }
  //cartera
  getCartera(data){
    return this.http.post(`${ this.url_olc }/GetCartera/`, data);
  }

  getDetalleCartera(data){
    return this.http.post(`${ this.url_olc }/GetDetalleCartera/`, data);
  }

}
