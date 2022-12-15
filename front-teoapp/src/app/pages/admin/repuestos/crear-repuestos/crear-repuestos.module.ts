import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearRepuestosPageRoutingModule } from './crear-repuestos-routing.module';

import { CrearRepuestosPage } from './crear-repuestos.page';
import { ComponentsModule } from '../../../../components/components.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearRepuestosPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [CrearRepuestosPage]
})
export class CrearRepuestosPageModule {}
