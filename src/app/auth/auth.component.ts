import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {stringify} from 'querystring';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authStatus: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn() {
    this.authService.signIn().then(
      () => {
        console.log('Authentification successful');
        this.authStatus = this.authService.isAuth;
      }
    );
  }
  onSignOut() {
    this.authService.signOut();
    console.log('User signef out!');
    postMessage('You have been signed out', 'Sign out');
  }

}
