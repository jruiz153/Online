import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  tituloOpcion: string;

  constructor() { }

  asignarTituloOpcion(texto: string) {
        this.tituloOpcion = texto;
    }
}
