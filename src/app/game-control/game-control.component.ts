import { Component, EventEmitter, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  interval:any;
  lastNumber = 0;
  onStartGame(){
    this.interval = setInterval(()=>{
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    },1000)
  }
  onPauseGame(){
    clearInterval(this.interval);
  }
}
