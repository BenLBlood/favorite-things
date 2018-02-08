import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Favorite Things';
  favoriteColor = 'pink';
  favoriteNumber = 0;

  constructor(db: AngularFirestore) {

  }

  setColor(selectedColor: string): void {
    console.log('You selected the color ' + selectedColor);
    this.favoriteColor = selectedColor;
  }

  updateColor(): void {
    console.log('TODO: Update the color');
  }

  setNumber(newNumber: number): void {
    this.favoriteNumber = newNumber;
  }
}
