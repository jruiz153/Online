import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/components/login/login.component';

//LAZY path: 'carteram' esta no se debe llamar como ningun componente o ruta en el link, sino saca error.
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
  { path: 'guia', loadChildren: () => import(`./guia/guia.module`).then(m => m.GuiaModule) },
  { path: 'carteram', loadChildren: () => import(`./cartera/cartera.module`).then(m => m.CarteraModule) },
  { path: 'monitor', loadChildren: () => import(`./monitor/monitor.module`).then(m => m.MonitorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
