import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroMantenimientoPage } from './registro-mantenimiento.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroMantenimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroMantenimientoPageRoutingModule {}
