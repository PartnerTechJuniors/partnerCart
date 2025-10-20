import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../types/product';
import { ProductCard } from './product-card/product-card';
import { Skeleton } from './skeleton/skeleton';
import { ProductService } from '../../services/product';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard, Skeleton, NgClass],
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

  async ngOnInit(){
    const productsApi: Product[] = await this.productService.getAllProducts()
    this.allProducts.set(productsApi);
    this.products.set(productsApi);

    this.categories.set(await this.productService.getListCategories());

    const brands = [...new Set(productsApi.map((p: Product) => p.brand))].filter((brand): brand is string => brand !== undefined);

    this.brands.set(brands);
  }

  async filterByCategory(categoryName: string){
    this.products.set(await this.productService.getByCategory(categoryName));
    this.categoryActive.set(categoryName);
    this.brandActive.set('');
  }

  filterByBrand(brandName: string) {
    const base = this.categoryActive()
      ? this.products()
      : this.allProducts();

    const filtered = base.filter(p => p.brand === brandName);

    this.products.set(filtered);
    this.brandActive.set(brandName);
  }

  clearFilters() {
    this.products.set(this.allProducts());
    this.categoryActive.set('');
    this.brandActive.set('');
  }
}
