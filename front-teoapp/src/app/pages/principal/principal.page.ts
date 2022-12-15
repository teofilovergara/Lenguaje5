import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MaquinaService } from 'src/app/services/maquina.service';

@Component({
  selector: 'app-principal',
  templateUrl: 'principal.page.html',
  styleUrls: ['principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  maquinas;
  maq_id: number;

  constructor(
    private maquinaService: MaquinaService,
    private router : Router
    ) {}

  ngOnInit() {
    this.listarMaquinas();
    // this.listarMaquinasSolicitadas();
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

  eliminarMaquina(maquina, i, slidingItem) {
    console.log('eliminar, eliminar');
    if (window.confirm('Seguro que quieres eliminar?')) {
      this.maquinaService.eliminarMaquina(maquina.maq_id).subscribe(() => {
        this.maquinas.splice(i, 1);
        slidingItem.close();
        this.ionViewWillEnter();
        console.log('Maquina eliminada!');
      });
    }
  }

  addMaquina(){
    this.router.navigate(['/admin/maquinas/crear-maquinas'])
  }

  addRepuesto(){
    this.router.navigate(['/admin/repuestos/crear-repuestos'])
  }

  registrarMantenimiento(){
    // console.log('ENTROOOO');
    this.router.navigate(['/tabs/principal/registro-mantenimiento'])

  }

}
