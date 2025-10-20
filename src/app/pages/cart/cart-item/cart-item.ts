import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@services/cart';
import { Button } from '@components/button/button';
import { Product } from '@app/types/product';

@Component({
  selector: 'app-cart-item',
  imports: [CommonModule, Button],
  templateUrl: './cart-item.html'
})
export class CartItem {
  cartService = inject(CartService)
  item = input.required<Product>();
}
