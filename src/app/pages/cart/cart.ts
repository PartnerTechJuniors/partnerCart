import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart';
import { CartItem } from "./cart-item/cart-item";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cart',
  imports: [CartItem, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  cartService = inject(CartService);
}
