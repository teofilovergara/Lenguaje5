  import { Component, OnInit } from '@angular/core';
import { MaquinaService } from 'src/app/services/maquina.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar-maquinas',
  templateUrl: './actualizar-maquinas.page.html',
  styleUrls: ['./actualizar-maquinas.page.scss'],
})
export class ActualizarMaquinasPage implements OnInit {

  maquinas: any;
  id: any;
  actualizarMaquinaForm: FormGroup;

  maq_nombre: any;
  maq_comentario: any;
  maq_tipo: any;

  constructor(
    public MaquinaService: MaquinaService,
    public formBuilder: FormBuilder,
    public router: Router,
    public activatedRoute: ActivatedRoute
    ) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
    }

     ngOnInit() {
       console.log('Este es el iddddd',this.id);
       this.actualizarMaquinaForm = this.formBuilder.group({
        maq_nombre: [''],
        maq_comentario: [''],
        maq_tipo: ['']
       });
      this.getDato(this.id);
     }


  getDato(maq_id){
    this.MaquinaService.obtenerMaquinas(this.id)
    .subscribe(res => {
      console.log('DATAAAA',res);
      this.maq_nombre = res['maquina'].maq_nombre;
      this.maq_comentario = res['maquina'].maq_comentario;
      this.maq_tipo= res['maquina'].maq_tipo;
    }
    );
  }

  onSubmit(){
    console.log(this.actualizarMaquinaForm.value);
  }
  actualizarForm() {
    console.log('codigo id metodo update', this.id);
      this.MaquinaService.actualizarMaquina(this.id, this.actualizarMaquinaForm.value)
        .subscribe((res) => {
          console.log(res);
          this.actualizarMaquinaForm.reset();
          this.router.navigate(['/admin/maquinas']);
        });

  }

}
