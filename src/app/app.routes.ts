import { Routes } from '@angular/router';
import { ProductsList } from './pages/products-list/products-list';
import { Cart } from './pages/cart/cart';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductsList
  },
  {
    path: 'cart',
    component: Cart
  }
];
