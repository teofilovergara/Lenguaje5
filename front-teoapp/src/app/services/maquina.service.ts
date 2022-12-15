import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Maquina } from '../interfaces/maquina';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MaquinaService {
  api = environment.urlBase + '/maquina';
  comentarioAPI = 'https://api.comentario.ovh/v1/'
  constructor(public http: HttpClient) {}

  listarMaquinas() {
    return this.http.get(`${this.api}`);
  }

  crearMaquinas(maquina: any) {
    return this.http.post(`${this.api}/create`, maquina);
  }

  buscarMaquinas(texto: String) {
    return this.http.get(`${this.api}-filter?q=${texto}`);
  }

  obtenerMaquinas(id: number){
    // const path = `${this.api}/find/${id}`;
    // return this.http.get(path);
    return this.http.get(`${this.api}/find/${id}`);
  }

  actualizarMaquina(can_id, maquina: Maquina) {
    return this.http.put(`${this.api}/update/${can_id}`, maquina
    );
    // return this.http.put('http://localhost:3000/maquina/update/' + can_id,
    //   maquina
    // );
  }

  eliminarMaquina(id: Observable<Maquina[]>) {
    return this.http.delete<Maquina[]>(`${this.api}/remove/${id}`);
  }

  getComentario(artista, maquina){
    return this.http.get(`${this.comentarioAPI}${artista}/${maquina}`);
  }

  listarMaquinasSolicitadas() {
    return this.http.get(`${this.api}/solicitadas`);
  }

  ActualizarMaquinaSolicitada(id) {
    return this.http.get(`${this.api}/actualizar-maquina-solicitadas/${id}`);
  }


}
