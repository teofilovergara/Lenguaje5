import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroMantenimientoPageRoutingModule } from './registro-mantenimiento-routing.module';

import { RegistroMantenimientoPage } from './registro-mantenimiento.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroMantenimientoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RegistroMantenimientoPage]
})
export class RegistroMantenimientoPageModule {}
