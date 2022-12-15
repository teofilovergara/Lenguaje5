import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarRepuestosPageRoutingModule } from './actualizar-repuestos-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ActualizarRepuestosPage } from './actualizar-repuestos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarRepuestosPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [ActualizarRepuestosPage],
})
export class ActualizarRepuestosPageModule {}
