import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'coinmarket',
    loadChildren: () => import('./features/router/shell.routes').then(m => m.SHELL_ROUTES)
  },
  {
    path: '', redirectTo: 'coinmarket', pathMatch: 'full'
  }

];

