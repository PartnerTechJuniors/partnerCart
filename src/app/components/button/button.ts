import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html'
})
export class Button {
  label = input<string>('');
  extraClass = input<string>('');
  btnClicked = output();
}
