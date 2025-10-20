import { Routes } from '@angular/router';
import { ProductsList } from './pages/products-list/products-list';
import { Cart } from './pages/cart/cart';
import { ProductDetail } from './pages/product-detail/product-detail';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductsList,
    title: 'Productos'
  },
  {
    path: 'cart',
    component: Cart
  },
  {
    path: 'product/:id',
    component: ProductDetail
  }
];
