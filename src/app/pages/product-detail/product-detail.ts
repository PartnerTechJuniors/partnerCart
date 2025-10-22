import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@app/types/product';
import { PrimaryButton } from '@components/primary-button/primary-button';
import { CartService } from '@services/cart';
import { Stars } from "@pages/products-list/product-card/stars/stars";
import { Title } from '@angular/platform-browser';
import { ProductService } from '@services/product';
import { slugToTitle } from '@app/utils';
import { Skeleton } from './skeleton/skeleton';
import { Prices } from "@pages/products-list/product-card/prices/prices";

@Component({
  selector: 'app-product-detail',
  imports: [PrimaryButton, Stars, Skeleton, Prices],
  templateUrl: './product-detail.html'
})
export class ProductDetail implements OnInit{
  cartService = inject(CartService);
  productService = inject(ProductService);
  productSlug =  '';
  product = signal<Product | null>(null);

  constructor(private route: ActivatedRoute, private titleService: Title){
    this.route.params.subscribe(params => {
      this.productSlug = params['slug'];
    })
  }

  async ngOnInit(){
    const title = slugToTitle(this.productSlug);
    const productfilter = await this.productService.searchProduct(title);
    this.product.set(productfilter[0]);
    this.titleService.setTitle('Producto - ' + this.product()?.title!);
  }
}
