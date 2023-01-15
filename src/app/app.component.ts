import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment4-game-control';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number) {
    if(firedNumber % 2 === 0){
      this.evenNumbers.push(firedNumber);
    }
    else{
      this.oddNumbers.push(firedNumber);
    }
  }
}
