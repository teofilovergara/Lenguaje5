import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  api = 'http://localhost:3000/usuario';
  constructor(public http: HttpClient) {}

  listarUsuario() {
    return this.http.get(this.api + 's');
  }

  crearUsuario(user: any) {
    return this.http.post(this.api + '/create', user);
  }

  buscarUsuario(texto: String) {
    return this.http.get(this.api + `s-filter?q=${texto}`);
  }

  obtenerUsuario(id: number){
    const path = `${this.api}/find/${id}`;
    return this.http.get(path);
  }

  actualizarUsuario(usu_codigo, usuario: Usuario) {
    return this.http.put(
      'http://localhost:3000/usuario/update/' + usu_codigo,
      usuario
    );
  }

  eliminarUsuarioService(id: Observable<Usuario[]>) {
    return this.http.delete<Usuario[]>(
      'http://localhost:3000/usuario/remove/' + id
    );
  }

  // login(user) {
  //   return this.http.post(this.api + '/login', user);
  // }

  // logout(user) {
  //   return this.http.post(this.api + '/logout', user);
  // }
}
