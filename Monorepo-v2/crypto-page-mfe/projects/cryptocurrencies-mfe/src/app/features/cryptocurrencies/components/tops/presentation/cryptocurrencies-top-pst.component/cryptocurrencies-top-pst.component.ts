import { Component, computed, input, signal } from '@angular/core';
import { MFEvents } from '../../../../../../../../../library-mfe/src/lib/events/events-enums';
import { Coin } from '../../../../models/coin.interface';
@Component({
  selector: 'app-cryptocurrencies-top-pst.component',
  imports: [],
  templateUrl: './cryptocurrencies-top-pst.component.html',
  styleUrl: './cryptocurrencies-top-pst.component.css',
})
export class CryptocurrenciesTopPstComponent {
  readonly coin = input<Coin>();
  readonly isFavorite = signal(false);

   toggleWatchlist() {
    const value = !this.isFavorite();
    this.isFavorite.set(value);

    window.dispatchEvent(
      new CustomEvent(
        value ? MFEvents.ADD_TO_WATCHLIST : MFEvents.REMOVE_FROM_WATCHLIST,
        {
          detail: { coin: this.coin() }
        }
      )
    );
  }
}
