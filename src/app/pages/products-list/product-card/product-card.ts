import { Component, inject, input } from '@angular/core';
import { Product } from '../../../types/product';
import { PrimaryButton } from "../../../components/primary-button/primary-button";
import { CartService } from '../../../services/cart';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { Stars } from "./stars/stars";
import { titleToSlug } from '../../../utils';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButton, CommonModule, RouterLink, Stars],
  templateUrl: './product-card.html'
})
export class ProductCard {
  cartService = inject(CartService);
  p = input.required<Product>();

  priceWithDiscount(){
    return this.p().price * (1 - this.p().discountPercentage / 100);
  }

  discountPercentageRound(){
    return Math.round(this.p().discountPercentage)
  }

  convertToSlug(title: string){
    return titleToSlug(title);
  }
}
