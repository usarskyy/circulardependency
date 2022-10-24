import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../data-access/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private readonly authService: AuthService) { }


  public login(): void {
    this.authService.login();
  }
}
