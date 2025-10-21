import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@services/cart';
import { Button } from '@components/button/button';
import { Product } from '@app/types/product';
import { Icontrash } from '@icons/icontrash/icontrash';
import { QuantitySelector } from "@componentsquantity-selector/quantity-selector";

@Component({
  selector: 'app-cart-item',
  imports: [CommonModule, Button, Icontrash, QuantitySelector],
  templateUrl: './cart-item.html'
})
export class CartItem {
  cartService = inject(CartService);
  item = input.required<Product>();
  
  priceWithDiscount(){
    return this.item().price * (1 - this.item().discountPercentage / 100);
  }

  discountPercentageRound(){
    return Math.round(this.item().discountPercentage);
  }
}
