import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//Aca se importan los modulos de cada componente, esos seran los que trabajaran el lazy
import { MaterialModule } from './modules/material.module';
import { SharedModule } from './shared/shared.module';
import { CarteraModule } from './cartera/cartera.module';
import { GuiaModule } from './guia/guia.module';
import { ColaModule } from './cola/cola.module';
import { MonitorModule } from './monitor/monitor.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/components/login/login.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
//Servicios
import { EnviaService } from './services/envia.service';
import { ToolsService } from './services/tools.service';
import { NavbarService } from './services/navbar.service';
import { AuthService } from './services/auth.service';
//Directivas(se situe el focus en el primer contorl vacio)
import { FormDirective } from './form.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    MaterialModule,
    SharedModule,
    CarteraModule,
    GuiaModule,
    MonitorModule,
    ColaModule
  ],
  exports: [
  ],
  providers: [EnviaService, ToolsService, NavbarService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
