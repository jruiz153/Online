import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EstadisticaRepartoComponent } from './components/estadistica-reparto/estadistica-reparto.component';
import { MonitorRepartoComponent } from './components/monitor-reparto/monitor-reparto.component';
import { SharedModule } from '../shared/shared.module';
import { MonitorRoutingModule } from './monitor-routing.module';
import { MonitorRecoleccionComponent } from './components/monitor-recoleccion/monitor-recoleccion.component';

//en los modulos de importan los routing de cada carpeta y los componentes que se utilizaran

@NgModule({
  declarations: [
    EstadisticaRepartoComponent,
    MonitorRepartoComponent,
    MonitorRecoleccionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MonitorRoutingModule
  ]
})
export class MonitorModule { }
