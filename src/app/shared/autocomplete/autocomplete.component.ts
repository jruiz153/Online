import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { EnviaService } from 'src/app/services/envia.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
})
export class AutocompleteComponent implements OnInit {

  public data$: Observable<any[]>;
  public keyword = 'Nom_Ciudad';
  isLoading = false;

  @Output() enviar: EventEmitter<any>;

  constructor(private enviaS: EnviaService) {
    this.isLoading = true;
    this.enviar = new EventEmitter();
  }
  ngOnInit(): void {
  }
  //busca todas la ciudades, ya como que no se necesita
  getData(): void {
    this.data$ = this.enviaS.getCiudades();
  }
  //cuando hace clic sobre el registro dispara el evento, y es recibido en el padre con la propiedad (enviar)='recibirMensajeO($event)'
  selectEvent(item) {
    this.enviar.emit(item);
  }

  getServerResponse(event) {
    this.data$ = this.enviaS.getCiudadesLetra(event);
  }

  searchCleared() {
    this.data$ = null;
  }

}
