import { Component, computed, input, signal } from '@angular/core';
import { MFEvents } from '../../../../../../../../../library-mfe/src/lib/events/events-enums';
import { Coin } from '../../../../models/coin.interface';
@Component({
  selector: 'tr[app-cryptocurrencies-top-pst]',
  imports: [],
  templateUrl: './cryptocurrencies-top-pst.component.html',
  styleUrl: './cryptocurrencies-top-pst.component.css',
})
export class CryptocurrenciesTopPstComponent {
  readonly coin = input<Coin>() ;
  readonly index = input<number>(0) ;
  readonly isFavorite = signal(false);



  // private favorites = signal<Set<string>>(new Set());

  // toggleWatchlist(coin: Coin) {
  //   const updated = new Set(this.favorites());

  //   if (updated.has(coin.id)) {
  //     updated.delete(coin.id);

  //     window.dispatchEvent(
  //       new CustomEvent(MFEvents.REMOVE_FROM_WATCHLIST, {
  //         detail: {coin:  coin }
  //       })
  //     );
  //   } else {
  //     updated.add(coin.id);

  //     window.dispatchEvent(
  //       new CustomEvent(MFEvents.ADD_TO_WATCHLIST, {
  //         detail: {coin: coin }
  //       })
  //     );
  //   }

  //   this.favorites.set(updated);
  // }

   toggleWatchlist() {
    const value = !this.isFavorite();
    this.isFavorite.set(value);

    window.dispatchEvent(
      new CustomEvent(
        value ? MFEvents.ADD_TO_WATCHLIST : MFEvents.REMOVE_FROM_WATCHLIST,
        {
          detail: { coin: this.coin()}
        }
      )
    );
  }


}
