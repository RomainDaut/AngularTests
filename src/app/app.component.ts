import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
      resolve(date);
    }, 2000
  );
});

  appareils = [
    {
      name: 'Entry Hall Light',
      status: 'Off'
    },
    {
      name: 'Lounge Light',
      status: 'On'
    },
    {
      name: 'Bedroom Light',
      status: 'Off'
    }
  ];

  constructor() {
    setTimeout(
      () => {this.isAuth = true;
    }, 4000
    );
  }

  onTurnOn() {
    console.log('Everything is OOOONNNNN!');
  }
}
