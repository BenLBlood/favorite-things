import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { filter } from 'rxjs/operator/filter';

import * as firebase from 'firebase/app';
import { OnInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Favorite Things';
  favoriteColor = 'pink';
  favoriteNumber = 0;

  constructor(db: AngularFireDatabase) {

  }

  ngOnInit(): void {
    firebase.database().ref().child('color').on('value',
      (snapshot: firebase.database.DataSnapshot) => {
        this.favoriteColor = snapshot.val();
      });
    firebase.database().ref().child('number').on('value',
      (snapshot: firebase.database.DataSnapshot) => {
        this.favoriteNumber = snapshot.val();
      });
  }
  ngOnDestroy(): void {
    firebase.database().ref().child('color').off();
    firebase.database().ref().child('number').off();
  }

  setColor(selectedColor: string): void {
    firebase.database().ref().child('color').set(selectedColor);
  }

  setNumber(newNumber: number): void {
    firebase.database().ref().child('number').set(newNumber);
  }
}
