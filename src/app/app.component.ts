import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';

  ngOnInit() {
    //// Observable
    const myObs = new Observable((observable) => {
      observable.next('Call Observable Now.');
    });

    console.log('Call Observable Before');

    myObs.subscribe({
      next: console.log,
    });
    console.log('Call Observable After');

    ///// Promise
    const myProm = new Promise((resolve, reject) => {
      console.log('Call Promise Now.');
      resolve('Promise Call Resolve');
      reject('Promise Call Reject');
    });

    myProm.then((res) => {
      console.log(res);
    });
  }
}
