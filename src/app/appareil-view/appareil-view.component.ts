import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {AuthService} from '../services/auth.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  isAuth = true;

  appareils: any[];

  lastUpdate = new Promise((resolve) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private appareilService: AppareilService, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onTurnOn() {
    this.appareilService.switchOnAll();
  }

  onTurnOff() {
    if (confirm('Are you sure you want to turn eveything off?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }
  onSignOut() {
    this.authService.signOut();
    console.log('User signed out!');
    this.router.navigate(['auth']);
  }
}
