import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repuesto } from '../interfaces/repuesto';

@Injectable({
  providedIn: 'root',
})
export class RepuestoService {
  api = 'http://localhost:3000/repuesto';
  constructor(public http: HttpClient) {}

  listarRepuesto() {
    return this.http.get(this.api + 's');
  }

  crearRepuesto(user: any) {
    return this.http.post(this.api + '/create', user);
  }

  buscarRepuesto(texto: String) {
    return this.http.get(this.api + `s-filter?q=${texto}`);
  }

  obtenerRepuesto(id: number){
    const path = `${this.api}/find/${id}`;
    return this.http.get(path);
  }

  actualizarRepuesto(rep_id, repuesto: Repuesto) {
    return this.http.put(
      'http://localhost:3000/repuesto/update/' + rep_id,
      repuesto
    );
  }

  eliminarRepuestoService(id: Observable<Repuesto[]>) {
    return this.http.delete<Repuesto[]>(
      'http://localhost:3000/repuesto/remove/' + id
    );
  }
}
