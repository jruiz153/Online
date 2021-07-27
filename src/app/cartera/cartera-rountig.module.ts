import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ConsultarCarteranComponent } from './components/consultar-carteran/consultar-carteran.component';


const routes: Routes = [
    { path: 'cartera', component: ConsultarCarteranComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarteraRoutingModule {}