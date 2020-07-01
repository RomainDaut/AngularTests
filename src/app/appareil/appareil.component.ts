import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: String;
  @Input() appareilStatus: String;

  constructor() { }

  ngOnInit() {
  }

  getStatut() {
   return this.appareilStatus
  }

  getColor() {
    if(this.appareilStatus === 'On'){
      return 'green';
    } else if (this.appareilStatus === 'Off'){
      return 'red';
    }
  }
}
