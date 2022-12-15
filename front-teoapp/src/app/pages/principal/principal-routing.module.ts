import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPage } from './principal.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPage,
  },
  // {
  //   path: 'actualizar-maquinas',
  //   loadChildren: () => import('./actualizar-maquinas/actualizar-maquinas.module').then( m=> m.ActualizarMaquinasPageModule)
  // },
  // {
  //   path: 'crear-maquinas',
  //   loadChildren: () => import('./crear-maquinas/crear-maquinas.module').then( m => m.CrearMaquinasPageModule)
  // },
  {
    path: 'registro-mantenimiento',
    loadChildren: () => import('./registro-mantenimiento/registro-mantenimiento.module').then( m => m.RegistroMantenimientoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalPageRoutingModule {}
