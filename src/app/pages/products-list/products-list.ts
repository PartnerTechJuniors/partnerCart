import { Component, OnInit, signal } from '@angular/core';
import { Product } from '../../types/product';
import { ProductCard } from './product-card/product-card';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css'
})
export class ProductsList implements OnInit {
  async ngOnInit(){
    const res = await fetch('https://fakestoreapi.com/products')
    this.products.set(await res.json())
  }
  products = signal<Product[]>([])
}
