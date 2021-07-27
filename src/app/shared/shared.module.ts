import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../shared/loading/loading.component';
import { AutocompleteComponent } from '../shared/autocomplete/autocomplete.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { HeaderComponent } from '../shared/header/header.component';
import { MenuComponent } from '../shared/menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { ModalEstadisticaRepartoComponent } from './modals/modal-estadistica-reparto/modal-estadistica-reparto.component';
import { MaterialModule } from '../modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
//import { FormDirective } from '../form.directive';

@NgModule({
  declarations: [
    AutocompleteComponent,
    LoadingComponent,
    HeaderComponent,
    MenuComponent,
    NavbarComponent,
    ModalEstadisticaRepartoComponent,
    SearchComponent,
    ResultsComponent,
    //FormDirective
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    AutocompleteLibModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoadingComponent,
    AutocompleteComponent,
    HeaderComponent,
    MenuComponent,
    NavbarComponent,
    SearchComponent
    //FormDirective
  ]
})
export class SharedModule { }
