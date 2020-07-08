import { Injectable } from '@angular/core';
@Injectable()
export class AppareilService {
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
  switchOnAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'On';
    }
  }
  switchOffAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'Off';
    }
  }
  switchOneOn(i: number) {
    this.appareils[i].status = 'On';
  }
  switchOneOff(i: number) {
    this.appareils[i].status = 'Off';
  }
}
