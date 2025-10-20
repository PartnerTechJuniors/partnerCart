import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types/product';
import { CommonModule } from '@angular/common';
import { PrimaryButton } from '../../components/primary-button/primary-button';
import { CartService } from '../../services/cart';
import { Stars } from "../products-list/product-card/stars/stars";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, PrimaryButton, Stars],
  templateUrl: './product-detail.html'
})
export class ProductDetail implements OnInit{
  cartService = inject(CartService);
  productId =  '';
  product = signal<Product | null>(null);

  constructor(private route: ActivatedRoute, private titleService: Title){
    this.route.params.subscribe(params => {
      this.productId = params['id'];
    })
  }

  async ngOnInit(){
    const res = await fetch(`https://dummyjson.com/products/${this.productId}`)
    const data = await res.json();
    this.product.set(data);
    this.titleService.setTitle('Producto - ' + this.product()?.title!);
  }
}
