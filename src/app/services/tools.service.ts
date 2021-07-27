import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ToolsService {
    private url = 'https://localhost:44372/api/envia/';
    public hora = new Date();
    visible: boolean;
    posicion_menu = 'start';
    estado_navbar = false;

    constructor(private http: HttpClient) { }

    getHora(){
        return this.hora;
    }

    //esconder() { this.visible = false; }

    //mostrar() { this.visible = true; }

    esconderNavbar(){
      this.estado_navbar = false;
    }
   mostrarNavbar(){
      this.estado_navbar = true;
    }

    cambiarPosicionMenu(position){
      this.posicion_menu = position;
    }

    mensaje_ok(mensaje) {
      ($ as any).notify({
          title: '<b style=\"font-size:16px\">Mensaje</b>',
          message: '<div style=\"font-size:16px\">' +  mensaje + '</div>'
      }, {
          type: 'success',
          delay: 1000,
          placement: {
              from: 'bottom'
          }
      }
      );
    }

    mensaje_error(mensaje) {
      ($ as any).notify({
          title: '<b style=\"font-size:16px\">Error!!</b>',
          message: '<div style=\"font-size:16px\">' + mensaje + '</div>',
          newest_on_top: false
      },
      {
          type: 'danger',
          delay: 1500,
          placement: {
              from: 'bottom'
          },
      });
    }

  }


interface jQueryStatic {
    notify: any;
  }
