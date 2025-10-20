import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stars',
  imports: [NgClass],
  templateUrl: './stars.html',
  styles: ``
})
export class Stars {
  Math = Math;
  rating = input<number>(0);
  
  ratingRound(){
    return this.Math.round(this.rating())
  }
}
