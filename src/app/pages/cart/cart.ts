import { Component, inject } from '@angular/core';
import { CartService } from '@services/cart';
import { CartItem } from "./cart-item/cart-item";
import { RouterLink } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { PrimaryButton } from "@componentsprimary-button/primary-button";
import { Iconcart } from "@componentsicons/iconcart/iconcart";
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-cart',
  imports: [CartItem, RouterLink, PrimaryButton, Iconcart, CountUpModule],
  templateUrl: './cart.html'
})
export class Cart {
  cartService = inject(CartService);
  location = inject(Location);
  
  countUpOptions = {
    prefix: 'S/ ',
    decimalPlaces: 2,
    separator: ',',
    decimal: '.',
    useEasing: true,
    duration: 2
  };

  constructor(private titleService: Title){
    this.titleService.setTitle(`Mi carrito - ${this.cartService.countQuantityProduct()} articulos`);
  }

  goback(){
    this.location.back();
  }
}
