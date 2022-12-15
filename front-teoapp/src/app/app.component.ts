import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {}

  async logout(){
    await this.authService.logout();
    this.router.navigate(['/']);
  }

}
