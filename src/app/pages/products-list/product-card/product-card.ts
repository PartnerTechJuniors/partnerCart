import { Component, inject, input } from '@angular/core';
import { Product } from '@app/types/product';
import { PrimaryButton } from '@components/primary-button/primary-button';
import { CartService } from '@services/cart';
import { RouterLink } from "@angular/router";
import { Stars } from "./stars/stars";
import { titleToSlug } from '@app/utils';
import { Prices } from "./prices/prices";

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButton, RouterLink, Stars, Prices],
  templateUrl: './product-card.html'
})
export class ProductCard {
  cartService = inject(CartService);
  p = input.required<Product>();

  convertToSlug(title: string){
    return titleToSlug(title);
  }
}
