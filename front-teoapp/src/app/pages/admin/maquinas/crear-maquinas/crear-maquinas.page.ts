import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MaquinaService } from '../../../../services/maquina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-maquinas',
  templateUrl: './crear-maquinas.page.html',
  styleUrls: ['./crear-maquinas.page.scss'],
})
export class CrearMaquinasPage implements OnInit {
  registroForm: FormGroup;

  constructor(
    private formsBuilder: FormBuilder,
    private maquinaService: MaquinaService,
    public router: Router
  ) {
    this.registroForm = this.formsBuilder.group({
      maq_nombre: [''],
      maq_tipo: [''],
      maq_comentario: [''],
    });
  }

  ngOnInit() {
    console.log(this.registroForm);
  }

  crearMaquina() {
    console.log(this.registroForm);

    this.maquinaService
      .crearMaquinas(this.registroForm.value)
      .subscribe((res) => {
        console.log(res);
      });
      this.router.navigate(['/admin/maquinas']);
  }

}
