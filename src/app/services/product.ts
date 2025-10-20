import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  async getAllProducts(){
    const res = await fetch('https://dummyjson.com/products?limit=40&skip=0');
    const data = await res.json();
    return data['products'];
  }

  async getByCategory(categoryName: string){
    const res = await fetch(`https://dummyjson.com/products/category/${categoryName}`);
    const data = await res.json();
    return data['products'];
  }
  
  async getListCategories(){    
    const res = await fetch('https://dummyjson.com/products/category-list');
    const data = await res.json();
    return data;
  }

  async getSingleProduct(productId: string){
    const res = await fetch(`https://dummyjson.com/products/${productId}`)
    const data = await res.json();
    return data;
  }

  async searchProduct(search: string){
    const res = await fetch(`https://dummyjson.com/products/search?q=${search}`)
    const data = await res.json();
    return data['products'];
  }
}
