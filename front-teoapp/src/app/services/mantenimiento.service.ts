import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mantenimiento } from '../interfaces/mantenimiento';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MantenimientoService {
  api = environment.urlBase + '/mantenimiento';
  comentarioAPI = 'https://api.comentario.ovh/v1/'
  constructor(public http: HttpClient) {}

  listarMantenimientos() {
    return this.http.get(`${this.api}`);
  }

  listarHistorial(){
    return this.http.get(`${this.api}/historial`)
  }

  crearMantenimientos(mantenimiento: any) {
    return this.http.post(`${this.api}/create`, mantenimiento);
  }

  obtenerMantenimientos(id: number){
    return this.http.get(`${this.api}/find/${id}`);
  }

  actualizarMantenimiento(can_id, mantenimiento: Mantenimiento) {
    return this.http.put(`${this.api}/update/${can_id}`, mantenimiento
    );
  }

  eliminarMantenimiento(id: Observable<Mantenimiento[]>) {
    return this.http.delete<Mantenimiento[]>(`${this.api}/remove/${id}`);
  }

}
