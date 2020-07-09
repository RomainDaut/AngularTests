import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  getStatut() {
   return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'On') {
      return 'green';
    } else if (this.appareilStatus === 'Off') {
      return 'red';
    }
  }
  onSwitch() {
    if (this.appareilStatus === 'On') {
      this.appareilService.switchOneOff(this.index);
    } else if (this.appareilStatus === 'Off') {
      this.appareilService.switchOneOn(this.index);
    }
  }
}
