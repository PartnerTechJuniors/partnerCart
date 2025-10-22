import { CurrencyPipe, NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { DiscountPorcentPipe } from '@app/pipes/discount-porcent-pipe';

@Component({
  selector: 'app-prices',
  imports: [CurrencyPipe, NgClass, DiscountPorcentPipe],
  templateUrl: './prices.html',
  styles: ``
})
export class Prices {
  price = input.required<number>();
  discountPercentage = input.required<number>();

  priceWithDiscount(){
    return this.price() * (1 - this.discountPercentage() / 100);
  }

  discountPercentageRound(){
    return Math.round(this.discountPercentage());
  }
}