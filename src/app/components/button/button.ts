import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html'
})
export class Button {
  label = input<string>('');
  btnClicked = output();
}
