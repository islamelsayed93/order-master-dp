import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/components/product/product.component').then(m => m.ProductComponent),
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('./features/orders/components/order/order.component').then(m => m.OrderComponent),
  },
  {
    path: 'order-details/:id',
    loadComponent: () =>
      import('./features/order-details/components/order-detail/order-detail.component').then(m => m.OrderDetailComponent),
  },
];
