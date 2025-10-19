import { Injectable, signal } from '@angular/core';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = signal<Product[]>([]);

  public cartitems = this.cart.asReadonly();
  
  addToCart(product: Product) {
    this.cart.update(items => {
      const index = items.findIndex(p => p.id === product.id);

      if (index !== -1) {
        const updated = [...items];
        const existing = updated[index];
        updated[index] = {
          ...existing,
          quantity: (existing.quantity ?? 1) + 1
        };
        return updated;
      }

      return [...items, { ...product, quantity: 1 }];
    });
  }

  removeFromCart(id: number){
    this.cart.update(items => items.filter(p => p.id !== id));
  }
  
  decreaseQuantity(id: number) {
    this.cart.update(items =>
      items
        .map(p =>
          p.id === id
            ? { ...p, quantity: Math.max((p.quantity ?? 1) - 1, 0) }
            : p
        )
        .filter(p => p.quantity! > 0)
    );
  }
  
  updateQuantity(id: number, quantity: number) {
    const qty = Math.max(Number(quantity), 1); 
    this.cart.update(items =>
      items.map(p =>
        p.id === id ? { ...p, quantity: qty } : p
      )
    );
  }

  clearCart() {
    this.cart.set([]);
  }

  constructor() { }
}
