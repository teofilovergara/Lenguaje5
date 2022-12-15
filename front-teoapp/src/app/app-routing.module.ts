import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './guards/intro.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
    canLoad: [IntroGuard, AutoLoginGuard],
  },
  {
    path: 'registro',
    loadChildren: () =>
      import('./pages/registro/registro.module').then(
        (m) => m.RegistroPageModule
      ),
  },
  {
    path: 'recuperar',
    loadChildren: () =>
      import('./pages/recuperar/recuperar.module').then(
        (m) => m.RecuperarPageModule
      ),
  },
  {
    path: 'terminos',
    loadChildren: () =>
      import('./pages/terminos/terminos.module').then(
        (m) => m.TerminosPageModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminPageModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'admin/usuarios/actualizar/:id',
    loadChildren: () =>
      import('./pages/admin/usuarios/actualizar/actualizar.module').then(
        (m) => m.ActualizarPageModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'admin/repuestos/actualizar-repuestos/:id',
    loadChildren: () =>
      import('./pages/admin/repuestos/actualizar-repuestos/actualizar-repuestos.module').then(
        (m) => m.ActualizarRepuestosPageModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'admin/maquinas/actualizar-maquinas/:id',
    loadChildren: () =>
      import('./pages/admin/maquinas/actualizar-maquinas/actualizar-repuestos.module').then(
        (m) => m.ActualizarMaquinasPageModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'tabs/principal',
    loadChildren: () =>
      import(
        './pages/principal/principal.module'
      ).then((m) => m.PrincipalPageModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'historial',
    loadChildren: () => import('./pages/historial/historial.module').then( m => m.HistorialPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
