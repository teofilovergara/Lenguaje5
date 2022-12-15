import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearRepuestosPage } from './crear-repuestos.page';

const routes: Routes = [
  {
    path: '',
    component: CrearRepuestosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearRepuestosPageRoutingModule {}
