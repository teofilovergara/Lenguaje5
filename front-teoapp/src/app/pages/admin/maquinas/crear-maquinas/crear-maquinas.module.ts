import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearMaquinasPageRoutingModule } from './crear-maquinas-routing.module';

import { CrearMaquinasPage } from './crear-maquinas.page';
import { ComponentsModule } from '../../../../components/components.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearMaquinasPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [CrearMaquinasPage]
})
export class CrearMaquinasPageModule {}
