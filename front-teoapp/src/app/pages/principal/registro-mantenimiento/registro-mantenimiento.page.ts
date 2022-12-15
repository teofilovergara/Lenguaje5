import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { MaquinaService } from '../../../services/maquina.service';
import { RepuestoService } from '../../../services/repuesto.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MantenimientoService } from '../../../services/mantenimiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-mantenimiento',
  templateUrl: './registro-mantenimiento.page.html',
  styleUrls: ['./registro-mantenimiento.page.scss'],
})
export class RegistroMantenimientoPage implements OnInit {

  maquinasList = [];
  repuestosList = [];
  usuario;
  mantenimiento;
  maquina;
  repuesto;

  detalleMantenimiento={};

  constructor(
    private usuarioService : UsuarioService,
    private maquinaService : MaquinaService,
    private repuestoService : RepuestoService,
    private mantenimientoService : MantenimientoService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.listarMaquinas()
    this.listarRepuestos()
    this.listarUsuarioLogueado()
  }

  listarMaquinas(){
    this.maquinaService.listarMaquinas().subscribe(res=>{
      // console.log(res);
      this.maquinasList = res['maquina']
      // console.log(this.maquinasList);
    })
  }

  listarRepuestos(){
    this.repuestoService.listarRepuesto().subscribe(res=>{
      this.repuestosList = res['repuesto']
      console.log(this.repuestosList);
    })
  }

  listarUsuarioLogueado(){
    this.usuarioService.listarUsuario().subscribe(res=>{
      console.log(res['usuario'][0]);
      this.usuario = res['usuario'][0].usu_codigo
      console.log(this.usuario);
    })
  }

  guardarMantenimiento(){
    this.mantenimientoService.crearMantenimientos(this.detalleMantenimiento).subscribe(res=>{
      console.log(res);
    })
    this.router.navigate(['/tabs/historial'])
  }

  onChange(event){
    console.log("event",event, this.maquina, this.repuesto, this.usuario);
    this.detalleMantenimiento = {
      det_maquina_id: this.maquina,
      det_repuesto_id: this.repuesto,
      det_usuario_id: this.usuario
    }
    console.log('this.detalleMantenimientos', this.detalleMantenimiento);

  }
  


}
