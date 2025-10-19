import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [NgClass],
  templateUrl: './primary-button.html',
  styleUrl: './primary-button.css'
})
export class PrimaryButton {
  label = input();
  isDisabled = input(false);
  btnClick = output();
}
