import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  secondes: number;

  constructor() {
  }

  ngOnInit() {
    const counter = Observable.interval(1000);
    counter.subscribe(
      (value: number) => {
        this.secondes = value;
      }
    );
  }
}
