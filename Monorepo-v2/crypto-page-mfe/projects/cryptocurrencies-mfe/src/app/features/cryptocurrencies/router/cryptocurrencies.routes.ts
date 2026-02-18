import { Routes } from "@angular/router";
import { CryptocurrenciesComponent } from "../cryptocurrencies.component";


export const CRYPTOCURRENCIES_ROUTES: Routes = [
  {
    path:'cryptocurrencies',
    component: CryptocurrenciesComponent,
    children: [
      {
        path: "tops",
        loadComponent: () =>import('../components/tops/container/cryptocurrencies-top-ctn/cryptocurrencies-top-ctn.component').then((c) => c.CryptocurrenciesTopCtnComponent)
      }
    ]
  }
];
