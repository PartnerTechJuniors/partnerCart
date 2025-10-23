import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '@app/types/product';
import { ProductCard } from './product-card/product-card';
import { Skeleton } from './skeleton/skeleton';
import { ProductService } from '@services/product';
import { NgClass } from '@angular/common';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard, Skeleton, NgClass, InfiniteScrollDirective ],
  templateUrl: './products-list.html'
})
export class ProductsList implements OnInit {
  productService = inject(ProductService);
  allProducts = signal<Product[]>([]);  
  products = signal<Product[]>([]);
  categories = signal([]);
  categoryActive = signal('');
  brands = signal<string[]>([]);
  brandActive = signal('');
  total = signal<number>(0);
  private limit = 12;
  private skip = 0;
  private loading = false;

  async ngOnInit(){
    const resApi = await this.productService.getAllProducts(this.limit, this.skip)
    this.allProducts.set(resApi.products);
    this.products.set(resApi.products);
    this.total.set(resApi.total);

    this.categories.set(await this.productService.getListCategories());

    const brands = [...new Set(resApi.products.map((p: Product) => p.brand))].filter((brand): brand is string => brand !== undefined);

    this.brands.set(brands);
  }

  async filterByCategory(categoryName: string){
    this.products.set(await this.productService.getByCategory(categoryName));
    this.allProducts.set(await this.productService.getByCategory(categoryName));
    this.categoryActive.set(categoryName);
    this.brandActive.set('');
  }

  filterByBrand(brandName: string) {
    const base = this.categoryActive()
      ? this.products()
      : this.allProducts();

    const filtered = base.filter(p => p.brand === brandName);

    this.products.set(filtered);
    this.allProducts.set(filtered);
    this.brandActive.set(brandName);
  }

  clearFilters() {
    this.products.set(this.allProducts());
    this.allProducts.set(this.allProducts());
    this.categoryActive.set('');
    this.brandActive.set('');
  }

  async onScrollDown(){
    if (this.loading) return;
    this.loading = true;

    const response = await this.productService.getAllProducts(this.limit, this.skip);

    this.skip += this.limit;

    this.products.update(prev => [...prev, ...response.products]);

    const brands = [...new Set(response.products.map((p: Product) => p.brand))].filter((brand): brand is string => brand !== undefined);

    this.brands.update(prev => [...prev, ...brands]);

    this.loading = false;
  }
}
