import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/overview/router/overview.routes').then(m => m.OVERVIEW_ROUTES)
  }
];
