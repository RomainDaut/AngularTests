export class AppareilService {
  appareils = [
    {
      id: 1,
      name: 'Entry Hall Light',
      status: 'Off'
    },
    {
      id: 2,
      name: 'Lounge Light',
      status: 'On'
    },
    {
      id: 3,
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
  getAppareilById(id: number){
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }
}
