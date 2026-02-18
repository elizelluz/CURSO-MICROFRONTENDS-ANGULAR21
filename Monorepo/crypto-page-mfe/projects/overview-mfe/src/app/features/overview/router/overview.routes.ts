import { Routes } from "@angular/router";
import { OverviewComponent } from "../overview.component";
export const OVERVIEW_ROUTES: Routes = [
  {
    path: 'overview',
    component: OverviewComponent,
    children: [
      {
        path : 'trending',
        loadComponent: () => import('../components/trending/container/coin-trending-cnt/coin-trending-cnt.component').then(c => c.CoinTrendingCntComponent)
      }
    ]
  }
];
