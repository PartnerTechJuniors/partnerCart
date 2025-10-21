import { Component, inject, input } from '@angular/core';
import { Product } from '@app/types/product';
import { CartService } from '@services/cart';

@Component({
  selector: 'app-quantity-selector',
  imports: [],
  templateUrl: './quantity-selector.html'
})
export class QuantitySelector {
  cartService = inject(CartService);
  item = input.required<Product>();
}
