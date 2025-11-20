import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [CommonModule],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  counter=signal(0);
  constructor(){
    this.counter.set(0);
    effect(()=>{
      console.log('La valeur du compteur a changé: ', this.counter())
    })
  }
  increment(){
    this.counter.update((current)=>current +1);
  }
  decrement(){
    this.counter.update((current)=>current -1);
  }
  reset(){
    this.counter.set(0);
  }
  signalClass: any = {
    color:'green',
    height:'35px',
    width:'200px',
    border:'2px solid black',
    'font-weight': 'bold',
    'font-size': '20px',
    'text-align': 'center'
  };
}
