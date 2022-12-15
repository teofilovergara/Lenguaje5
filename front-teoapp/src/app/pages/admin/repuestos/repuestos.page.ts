import { Component, OnInit } from '@angular/core';
import { RepuestoService } from 'src/app/services/repuesto.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.page.html',
  styleUrls: ['./repuestos.page.scss'],
})
export class RepuestosPage implements OnInit {
  repuestos;
  rep_id: number;
  btnRol;

  constructor(
    private repuestoService: RepuestoService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.listarRepuestos();
  }

  ionViewWillEnter() {
    this.listarRepuestos();
  }

  listarRepuestos() {
    this.repuestoService.listarRepuesto().subscribe((data) => {
      console.log(data);
      this.repuestos = data['repuesto'];
    });
  }

  buscar(event) {
    const valor = event.detail.value;

    this.repuestoService.buscarRepuesto(valor).subscribe((data) => {
      console.log(data);
      if (data) {
        this.repuestos = data['repuesto'];
      } else {
        this.repuestos = [];
      }
    });
  }

  async eliminarRepuesto(repuesto, i, slidingItem) {
    console.log('eliminar, eliminar');

    await this.presentarAlerta(
      [
        { text: 'Ok', role: 'Ok' },
        { text: 'Cancelar', role: 'Cancelar' },
      ],
      'Seguro que quieres eliminar?',
      null
    );

    if (this.btnRol === 'Ok') {
      this.repuestoService
        .eliminarRepuestoService(repuesto.rep_id)
        .subscribe(() => {
          this.repuestos.splice(i, 1);
          slidingItem.close();
          this.ionViewWillEnter();
          this.presentarAlerta(['Ok'], 'Se ha eliminado exitosamente!', null);
        },  err => {
          this.presentarAlerta([
            { text: 'Ok', role: 'Ok' },
          ], 'No se a podido eliminar', null)
        },
        )
        slidingItem.close();
    } else {
      slidingItem.close();
    }
  }

  async presentarAlerta(boton, mensaje, encabezado) {
    const alert = this.alertController.create({
      buttons: boton,
      message: mensaje,
      header: encabezado,
      animated: true,
    });

    await (await alert).present();
    const { role } = await (await alert).onDidDismiss();
    this.btnRol = role;
    // console.log('THE ROLEEE', this.btnRol);
  }
}
