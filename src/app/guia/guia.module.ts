import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material.module';
import { LiquidarEnvioComponent } from './components/liquidar-envio/liquidar-envio.component';
import { CapturarGuiaComponent } from './components/capturar-guia/capturar-guia.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { GuiaRoutingModule } from './guia-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GuiaService } from './services/guia.service';
import { AnularGuiaComponent } from './components/anular-guia/anular-guia.component';
import { ConsultarGuiaComponent } from './components/consultar-guia/consultar-guia.component';
import { ConsultarGuiasComponent } from './components/consultar-guias/consultar-guias.component';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    LiquidarEnvioComponent,
    CapturarGuiaComponent,
    AnularGuiaComponent,
    ConsultarGuiaComponent,
    ConsultarGuiasComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    AutocompleteLibModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    GuiaRoutingModule
  ],
  exports: [
  ],
  providers: [GuiaService],
})
export class GuiaModule { }
