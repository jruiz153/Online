import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultarCarteranComponent } from './components/consultar-carteran/consultar-carteran.component';
import { SharedModule } from '../shared/shared.module';
import { CarteraRoutingModule } from './cartera-rountig.module';
import { MaterialModule } from '../modules/material.module';


@NgModule({
  declarations: [
    ConsultarCarteranComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CarteraRoutingModule,
    MaterialModule
  ],
})
export class CarteraModule { }
