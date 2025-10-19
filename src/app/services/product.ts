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
}
