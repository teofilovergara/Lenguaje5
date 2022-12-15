import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { ActualizarMaquinasPage } from './actualizar-maquinas.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarMaquinasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarMaquinasPageRoutingModule {}
