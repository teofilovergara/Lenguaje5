import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroForm: FormGroup;

  constructor(
    private formsBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private router: Router,
    public alertController: AlertController
  ) {

    this.registroForm = this.formsBuilder.group({
      usu_nombre: ['', Validators.required],
      usu_documento: ['', Validators.required],
      usu_telefono: ['', Validators.required],
      usu_email: ['', Validators.required],
      usu_pass: ['', Validators.required],
      usu_pass2: ['', Validators.required],
    });
  }

  
  ionViewWillEnter() {
    this.registroForm.reset();
  }

  ngOnInit() {
    // console.log(this.registroForm);
  }

  // registrarUsuario() {
  //   console.log(this.registroForm);

  //   this.usuarioService
  //     .crearUsuario(this.registroForm.value)
  //     .subscribe((res) => {
  //       console.log(res);
  //     });
  // }

  async registrarUsuario() {

    //validar que las contraseñas coincidan
    const usuario = this.registroForm.value;

    if (usuario.usu_pass !== usuario.usu_pass2) {
      const alert = await this.alertController.create({
        message: 'Las contraseñas no coinciden, favor vuelva a digitar'
      });
      alert.present();
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Guardando...',
    });
    await loading.present();

    const tmpUsuario = {
      usu_nombre: usuario.usu_nombre,
      usu_documento: usuario.usu_documento,
      usu_telefono: usuario.usu_telefono,
      usu_email: usuario.usu_email,
      usu_pass: usuario.usu_pass,
    };


    this.usuarioService.crearUsuario(tmpUsuario).subscribe(async (data: any) => {
      console.log(data)
      loading.dismiss();
      const message = data.success ? 'Usuario guardado con exito' : 'Error al guardar el usuario. Intente de nuevo más tarde';
      const toast = await this.toastController.create({
        message,
        duration: 2000
      });
      toast.present();

      this.router.navigate(['/']);

    });
  }

}
