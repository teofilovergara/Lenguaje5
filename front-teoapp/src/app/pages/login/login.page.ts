import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { AlertController,LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../../services/authentication.service';

interface CREDENTIALS  {
  usu_email: any;
  usu_pass: any;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  credentials : CREDENTIALS;
/* 
  credentials = this.formsBuilder.group({
    usu_email: ['', Validators.required],
    usu_pass: ['',Validators.required],
  }); */

  constructor(
    private formsBuilder: FormBuilder,
    private authService: AuthenticationService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private usuarioService: UsuarioService,
    public router: Router
  ) {
    this.loginForm = this.formsBuilder.group({
      usu_email: [''],
      usu_pass: [''],
    });
  }

  ngOnInit() {
  }
  
  async login() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.credentials = {
      'usu_email' : this.loginForm.value.usu_email,
      'usu_pass' :  this.loginForm.value.usu_pass
    }
    // console.log('CREDENCIALESSS',this.credentials);
   this.authService.login(this.credentials).subscribe(
      async (res) => {
        await loading.dismiss();
        this.router.navigate(['/tabs/principal']);
      },
      async (res) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Error al iniciar sesion',
          message: res.error.error,
          buttons: ['OK'],
        });

        await alert.present();
      }
    ); 
  }

  onEnter(event: any){
    this.login()
  }

/*   get usu_email(){
    return this.credentials.get('usu_email');
  }

  get usu_pass(){
    return this.credentials.get('usu_pass');
  } */
}
