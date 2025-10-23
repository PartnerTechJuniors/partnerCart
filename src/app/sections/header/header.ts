import { Component, inject, signal } from '@angular/core';
import { PrimaryButton } from "@components/primary-button/primary-button";
import { CartService } from '@services/cart';
import { RouterLink } from "@angular/router";
import { LucideAngularModule, ShoppingCartIcon } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [PrimaryButton, RouterLink, LucideAngularModule],
  templateUrl: './header.html'
})
export class Header {
  cartService = inject(CartService);
  nameShop = signal('PartnerCart');
  readonly ShoppingCartIcon = ShoppingCartIcon;
}
