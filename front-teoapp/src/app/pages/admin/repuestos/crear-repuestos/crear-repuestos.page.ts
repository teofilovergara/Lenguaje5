import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RepuestoService } from '../../../../services/repuesto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-repuestos',
  templateUrl: './crear-repuestos.page.html',
  styleUrls: ['./crear-repuestos.page.scss'],
})
export class CrearRepuestosPage implements OnInit {
  registroForm: FormGroup;

  constructor(
    private formsBuilder: FormBuilder,
    private repuestoService: RepuestoService,
    public router: Router
  ) {
    this.registroForm = this.formsBuilder.group({
      rep_nombre: [''],
      rep_serial: [''],
      rep_tipo: [''],
      rep_comentario: [''],
    });
  }

  ngOnInit() {
    console.log(this.registroForm);
  }

  crearRepuesto() {
    console.log(this.registroForm);

    this.repuestoService
      .crearRepuesto(this.registroForm.value)
      .subscribe((res) => {
        console.log(res);
      });
      this.router.navigate(['/admin/repuestos']);
  }

}
