import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToolsService } from './tools.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { UserModel } from '../models/user.model';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.url_olc;
  usuario = null;
  cliente = null;
  contacto = null;
  token: string;
  menu: any[] = [];

  constructor(private http: HttpClient, public tools: ToolsService, private router: Router) {
    this.getUsuario();
  }

  isAuthenticated(): boolean {
    return (this.usuario != null) ? true : false;
  }

  getUsuario() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));

    if (this.usuario != null){
        this.cliente = this.usuario.Nom_Cliente;
        this.contacto = this.usuario.Contacto;
     }
     else{
        this.contacto = '';
     }
    return this.contacto;
  }

  login(gtoken: string, data: any, recordar: boolean = false) {
   //recordar ? localStorage.setItem('email', user.tx_email) : localStorage.removeItem('email');

    return this.http.post(`${ this.url }/login/`, data).pipe(map((resp: any) => {
      localStorage.setItem('token', JSON.stringify(resp.Token));
      localStorage.setItem('usuario', JSON.stringify(resp));
      localStorage.setItem('cliente', JSON.stringify(resp.Nom_Cliente));
      this.cliente = resp.Nom_Cliente;
      this.contacto = resp.Contacto;

      return resp;
  }),
  	catchError(err => {
      return throwError(err);
  	})
	);
	}

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('cliente');
    this.router.navigate(['/login']);
  }
}
