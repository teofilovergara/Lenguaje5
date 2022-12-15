import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepuestosPage } from './repuestos.page';

const routes: Routes = [
  {
    path: '',
    component: RepuestosPage
  },
  {
    path: 'actualizar-repuestos',
    loadChildren: () => import('./actualizar-repuestos/actualizar-repuestos.module').then( m => m.ActualizarRepuestosPageModule)
  },
  {
    path: 'crear-repuestos',
    loadChildren: () => import('./crear-repuestos/crear-repuestos.module').then( m => m.CrearRepuestosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepuestosPageRoutingModule {}
