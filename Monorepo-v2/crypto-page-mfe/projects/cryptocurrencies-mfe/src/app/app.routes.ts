import { Routes } from '@angular/router';

export const routes: Routes = [
   {
    path: '',
    loadChildren: () => import('./features/cryptocurrencies/router/cryptocurrencies.routes').then(m => m.CRYPTOCURRENCIES_ROUTES)
  }
];
