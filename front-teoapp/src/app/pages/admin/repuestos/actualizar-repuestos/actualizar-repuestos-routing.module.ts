import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarRepuestosPage } from './actualizar-repuestos.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarRepuestosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarRepuestosPageRoutingModule {}
