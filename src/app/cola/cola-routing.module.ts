import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ColaImpresionComponent } from './components/cola-impresion/cola-impresion.component';

const routes: Routes = [
    { path: 'cola', component: ColaImpresionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColaRoutingModule {}