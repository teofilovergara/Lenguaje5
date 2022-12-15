import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarMaquinasPageRoutingModule } from './actualizar-maquinas-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ActualizarMaquinasPage } from './actualizar-maquinas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarMaquinasPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [ActualizarMaquinasPage],
})
export class ActualizarMaquinasPageModule {}
