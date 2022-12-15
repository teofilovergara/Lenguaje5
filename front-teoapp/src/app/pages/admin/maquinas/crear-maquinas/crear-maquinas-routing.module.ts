import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearMaquinasPage } from './crear-maquinas.page';

const routes: Routes = [
  {
    path: '',
    component: CrearMaquinasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearMaquinasPageRoutingModule {}
