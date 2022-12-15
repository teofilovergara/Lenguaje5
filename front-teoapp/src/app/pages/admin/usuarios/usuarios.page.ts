import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  users;
  usu_codigo: number;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.listarUsuarios();
  }

  ionViewWillEnter() {
    this.listarUsuarios();
  }

  listarUsuarios() {
    this.usuarioService.listarUsuario().subscribe((data) => {
      console.log(data);
      this.users = data['usuario'];
    });
  }

  buscar(event) {
    const valor = event.detail.value;

    this.usuarioService.buscarUsuario(valor).subscribe((data) => {
      console.log(data);
      if (data) {
        this.users = data['usuario'];
      } else {
        this.users = [];
      }
    });
  }

  eliminarUsuario(usuario, i, slidingItem) {
    console.log('eliminar, eliminar');
    if (window.confirm('Seguro que quieres eliminar?')) {
      this.usuarioService
        .eliminarUsuarioService(usuario.usu_codigo)
        .subscribe(() => {
          this.users.splice(i, 1);
          slidingItem.close();
          this.ionViewWillEnter();
          console.log('Usuario eliminado!');
        });
    }

  }

}

