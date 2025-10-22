import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [NgClass],
  templateUrl: './primary-button.html'
})
export class PrimaryButton {
  label = input.required<string>();
  extraClass = input<string>('');
  isDisabled = input<boolean>(false);
  btnClick = output<void>();
}
