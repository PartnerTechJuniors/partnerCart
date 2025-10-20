import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart';
import { CartItem } from "./cart-item/cart-item";
import { RouterLink } from "@angular/router";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cart',
  imports: [CartItem, RouterLink],
  templateUrl: './cart.html'
})
export class Cart {
  cartService = inject(CartService);

  constructor(private titleService: Title){
    this.titleService.setTitle(`Mi carrito - ${this.cartService.cartitems().length} articulos`);
  }
}
