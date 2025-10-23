import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toast } from '@components/toast/toast';
import { Header } from '@sections/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Toast],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('cart');
}
