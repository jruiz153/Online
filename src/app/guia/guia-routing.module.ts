import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LiquidarEnvioComponent } from './components/liquidar-envio/liquidar-envio.component';
import { CapturarGuiaComponent } from './components/capturar-guia/capturar-guia.component';
import { AnularGuiaComponent } from './components/anular-guia/anular-guia.component';
import { ConsultarGuiaComponent } from './components/consultar-guia/consultar-guia.component';
import { ConsultarGuiasComponent } from './components/consultar-guias/consultar-guias.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
    { path: 'inicio', component: InicioComponent}, //, canActivate: [ AuthGuard ] 
    { path: 'liquidar', component: LiquidarEnvioComponent }, //, canActivate: [ AuthGuard ] 
    { path: 'capturar', component: CapturarGuiaComponent },
    { path: 'anular', component: AnularGuiaComponent },
    { path: 'consultar-guia', component: ConsultarGuiaComponent },
    { path: 'consultar-guias', component: ConsultarGuiasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuiaRoutingModule {}
