import { Component, inject, input } from '@angular/core';
import { CartService } from '@services/cart';
import { Button } from '@components/button/button';
import { Product } from '@app/types/product';
import { Icontrash } from '@icons/icontrash/icontrash';
import { QuantitySelector } from "@componentsquantity-selector/quantity-selector";
import { Prices } from "@pages/products-list/product-card/prices/prices";

@Component({
  selector: 'app-cart-item',
  imports: [Button, Icontrash, QuantitySelector, Prices],
  templateUrl: './cart-item.html'
})
export class CartItem {
  cartService = inject(CartService);
  item = input.required<Product>();
  last= input();
}
