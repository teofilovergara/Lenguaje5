import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaquinasPage } from './maquinas.page';

const routes: Routes = [
  {
    path: '',
    component: MaquinasPage
  },
  {
    path: 'actualizar-maquinas',
    loadChildren: () => import('./actualizar-maquinas/actualizar-repuestos.module').then( m => m.ActualizarMaquinasPageModule)
  },
  {
    path: 'crear-maquinas',
    loadChildren: () => import('./crear-maquinas/crear-maquinas.module').then( m => m.CrearMaquinasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaquinasPageRoutingModule {}
