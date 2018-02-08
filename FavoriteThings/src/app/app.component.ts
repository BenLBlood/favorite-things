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
      })
  }
  ngOnDestroy(): void {
    firebase.database().ref().child('color').off();
  }

  setColor(selectedColor: string): void {
    firebase.database().ref().child('color').set(selectedColor);
  }

  // updateColor(): void {
  //   console.log('TODO: Update the color');
  //   firebase.database().ref().child('color').once('value',
  //     (snapshot: firebase.database.DataSnapshot) => {
  //       this.favoriteColor = snapshot.val(); 
  //     })
  // }

  setNumber(newNumber: number): void {
    this.favoriteNumber = newNumber;
  }
}
