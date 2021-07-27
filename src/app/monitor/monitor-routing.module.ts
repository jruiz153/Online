import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { EstadisticaRepartoComponent } from './components/estadistica-reparto/estadistica-reparto.component';
import { MonitorRepartoComponent } from './components/monitor-reparto/monitor-reparto.component';
import { MonitorRecoleccionComponent } from './components/monitor-recoleccion/monitor-recoleccion.component';

const routes: Routes = [
    { path: 'estadistica', component: EstadisticaRepartoComponent },
    { path: 'monitor-reparto', component: MonitorRepartoComponent },
    { path: 'monitor-recoleccion', component: MonitorRecoleccionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitorRoutingModule {}