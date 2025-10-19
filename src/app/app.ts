import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsList } from './pages/products-list/products-list';
import { Header } from './sections/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsList, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cart');
}
