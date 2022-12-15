import { Component, OnInit } from '@angular/core';
import { MantenimientoService } from '../../services/mantenimiento.service';
import { MaquinaService } from 'src/app/services/maquina.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  mantenimientos=[];
  nombreMaquina;
  historial : Array<any>[] = []


  constructor(
    private mantenimientoService : MantenimientoService,
  ) { }

  ngOnInit() {
    this.listarMantenimientoRealizados()
  }

  ionViewWillEnter(){
    this.listarMantenimientoRealizados()
  }


  listarMantenimientoRealizados(){
    this.mantenimientoService.listarHistorial().subscribe(res=>{
      this.mantenimientos = res['mantenimiento'][0];
      console.log(res['mantenimiento'][0]);

    })

  }

}
