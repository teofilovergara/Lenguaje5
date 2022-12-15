import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {

  usuarios: any;
  id: any;
  actualizarUsuarioForm: FormGroup;

  usu_nombre: any;
  usu_email: any;
  usu_documento: any;
  usu_telefono: any;

  constructor(
    public usuarioService: UsuarioService,
    public formBuilder: FormBuilder,
    public router: Router,
    public activatedRoute: ActivatedRoute
    ) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
    }

     ngOnInit() {
       console.log('Este es el iddddd',this.id);
       this.actualizarUsuarioForm = this.formBuilder.group({
        usu_nombre: [''],
        usu_email: [''],
        usu_documento: [''],
        usu_telefono: ['']
       });
      this.getDato(this.id);
     }


  getDato(usu_codigo){
    this.usuarioService.obtenerUsuario(this.id)
    .subscribe(res => {
      console.log('DATAAAA',res);
      this.usu_nombre = res['usuario'].usu_nombre;
      this.usu_email = res['usuario'].usu_email;
      this.usu_documento= res['usuario'].usu_documento;
      this.usu_telefono= res['usuario'].usu_telefono;
    }
    );
  }

  onSubmit(){
    console.log(this.actualizarUsuarioForm.value);
  }
  actualizarForm() {
    console.log('codigo id metodo update', this.id);
      this.usuarioService.actualizarUsuario(this.id, this.actualizarUsuarioForm.value)
        .subscribe((res) => {
          console.log(res);
          this.actualizarUsuarioForm.reset();
          this.router.navigate(['/admin/usuarios']);
        });

  }

}
