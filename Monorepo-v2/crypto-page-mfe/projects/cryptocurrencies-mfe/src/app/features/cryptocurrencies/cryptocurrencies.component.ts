import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-cryptocurrencies',
  imports: [RouterOutlet],
  templateUrl: './cryptocurrencies.component.html',
  styleUrl: './cryptocurrencies.component.css',
})
export class CryptocurrenciesComponent {
   title = 'app-cryptocurrencies';
}
