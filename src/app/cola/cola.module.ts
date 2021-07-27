import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material.module';
import { ColaRoutingModule } from './cola-routing.module';
import { ColaImpresionComponent } from './components/cola-impresion/cola-impresion.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { SharedModule } from '../shared/shared.module';
import { ColaService } from './services/cola.service';



@NgModule({
  declarations: [
    ColaImpresionComponent
  ],
  imports: [
    CommonModule,
    AutocompleteLibModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    ColaRoutingModule
  ],
  providers: [ColaService],
})
export class ColaModule { }
