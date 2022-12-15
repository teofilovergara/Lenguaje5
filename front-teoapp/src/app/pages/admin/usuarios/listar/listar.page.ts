import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../services/usuario.service';



@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  listaUsuarios;

  ngOnInit() {
    this.listarUsuarios();
  }

  listarUsuarios(){
    this.usuarioService.listarUsuario().subscribe(res =>{
      console.log(res);
      this.listaUsuarios = res['usuario'];
    });
  }

  // ionViewWillEnter(){
  //   this.listarOrganizadores();
  // }


  //  listarOrganizadores(){
  //   this.orgService.listarOrganizadores()
  //   .subscribe((data ) => {
  //     console.log(data);
  //     this.organizadors = data.organizadores;
  //   });
  //  }

  // buscar(event){
  //   const valor = event.detail.value;

  //   this.orgService.filtrarOrganizador(valor)
  //   .subscribe(data => {
  //     console.log(data);
  //     if(data){
  //       this.organizadors = data['organizador'];
  //     }else{
  //       this.organizadors = [];
  //     }
  //   });
  // }



  // eliminarOrganizador(organizador, i, slidingItem){
  //   console.log('eliminar, eliminar');
  //   if(window.confirm('Seguro que quieres eliminar?')){
  //     this.orgService.eliminarOrganizadorService(organizador.org_codigo)
  //     .subscribe(() => {
  //       this.organizadors.splice(i,1);
  //       slidingItem.close();
  //       this.ionViewWillEnter();
  //       console.log('Organizador eliminado!');
  //     });
  //   }

  // }

}
