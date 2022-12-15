import { Component, OnInit } from '@angular/core';
import { MaquinaService } from 'src/app/services/maquina.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-maquinas',
  templateUrl: './maquinas.page.html',
  styleUrls: ['./maquinas.page.scss'],
})
export class MaquinasPage implements OnInit {
  maquinas;
  maq_id: number;
  btnRol

  constructor(
    private maquinaService: MaquinaService,
    private alertController: AlertController
    ) {}

  ngOnInit() {
    this.listarMaquinas();
  }

  ionViewWillEnter() {
    this.listarMaquinas();
  }

  listarMaquinas() {
    this.maquinaService.listarMaquinas().subscribe((data) => {
      console.log(data);
      this.maquinas = data['maquina'];
    });
  }

  buscar(event) {
    const valor = event.detail.value;

    this.maquinaService.buscarMaquinas(valor).subscribe((data) => {
      console.log(data);
      if (data) {
        this.maquinas = data['maquina'];
      } else {
        this.maquinas = [];
      }
    });
  }

  async eliminarMaquina(maquina, i, slidingItem) {
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
      this.maquinaService.eliminarMaquina(maquina.maq_id)
        .subscribe(() => {
          this.maquinas.splice(i, 1);
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
    } 
    else {
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

