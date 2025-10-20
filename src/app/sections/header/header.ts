import { Component, inject, signal } from '@angular/core';
import { PrimaryButton } from "../../components/primary-button/primary-button";
import { CartService } from '../../services/cart';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [PrimaryButton, RouterLink],
  templateUrl: './header.html'
})
export class Header {
  cartService = inject(CartService);
  nameShop = signal('PartnerCart');
}
