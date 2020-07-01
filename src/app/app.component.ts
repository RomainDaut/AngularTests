import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

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

  turnedOn="On";
  turnedOff="Off";

  constructor() {
    setTimeout(
      () =>
      {this.isAuth = true;
    }, 4000
    );
  }

  onTurnOn() {
    console.log("Turn everything on!")
  }
}
