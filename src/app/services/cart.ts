import { Injectable, signal } from '@angular/core';
import { Product } from '@app/types/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = signal<Product[]>([]);

  public cartitems = this.cart.asReadonly();
  
  countQuantityProduct() {
    return this.cartitems().reduce((total, p) => total + p.quantity!, 0);
  }

  countQuantityProductWithoutDiscount() {
    return this.cartitems()
        .filter(p => Math.round(p.discountPercentage) > 0)
        .reduce((total, p) => total + p.quantity!, 0);
  }

  getTotalCart() {
    return this.cartitems().reduce((total, p) => total + (p.price * p.quantity!), 0);
  }

  getTotalCartWithDiscount() {
    return this.cartitems().reduce((total, p) => {
      const priceWithDiscount = p.price * (1 - (p.discountPercentage || 0) / 100);
      return total + priceWithDiscount * p.quantity!;
    }, 0);
  }

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

  continuePurchase(){
    alert('Otro dia joven, no disponible para prepagos chevere ');
  }

  constructor() { }
}
