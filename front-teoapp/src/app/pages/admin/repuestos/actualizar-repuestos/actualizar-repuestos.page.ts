  import { Component, OnInit } from '@angular/core';
import { RepuestoService } from 'src/app/services/repuesto.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar-repuestos',
  templateUrl: './actualizar-repuestos.page.html',
  styleUrls: ['./actualizar-repuestos.page.scss'],
})
export class ActualizarRepuestosPage implements OnInit {

  repuestos: any;
  id: any;
  actualizarRepuestoForm: FormGroup;

  rep_nombre: any;
  rep_comentario: any;
  rep_serial: any;
  rep_tipo: any;

  constructor(
    public RepuestoService: RepuestoService,
    public formBuilder: FormBuilder,
    public router: Router,
    public activatedRoute: ActivatedRoute
    ) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
    }

     ngOnInit() {
       console.log('Este es el iddddd',this.id);
       this.actualizarRepuestoForm = this.formBuilder.group({
        rep_nombre: [''],
        rep_comentario: [''],
        rep_serial: [''],
        rep_tipo: ['']
       });
      this.getDato(this.id);
     }


  getDato(rep_id){
    this.RepuestoService.obtenerRepuesto(this.id)
    .subscribe(res => {
      console.log('DATAAAA',res);
      this.rep_nombre = res['repuesto'].rep_nombre;
      this.rep_comentario = res['repuesto'].rep_comentario;
      this.rep_serial= res['repuesto'].rep_serial;
      this.rep_tipo= res['repuesto'].rep_tipo;
    }
    );
  }

  onSubmit(){
    console.log(this.actualizarRepuestoForm.value);
  }
  actualizarForm() {
    console.log('codigo id metodo update', this.id);
      this.RepuestoService.actualizarRepuesto(this.id, this.actualizarRepuestoForm.value)
        .subscribe((res) => {
          console.log(res);
          this.actualizarRepuestoForm.reset();
          this.router.navigate(['/admin/repuestos']);
        });

  }

}
