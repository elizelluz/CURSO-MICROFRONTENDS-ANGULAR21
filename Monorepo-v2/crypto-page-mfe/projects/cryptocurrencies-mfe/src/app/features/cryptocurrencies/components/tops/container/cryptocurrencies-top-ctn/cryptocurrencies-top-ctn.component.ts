
import { Component, computed, inject, OnInit, signal  } from '@angular/core';
import { CryptocurrenciesService } from '../../../../services/cryptocurrencies.service';
import { Coin } from '../../../../models/coin.interface';
import { MFEvents } from '../../../../../../../../../library-mfe/src/lib/events/events-enums';
import { CryptocurrenciesTopPstComponent } from '../../presentation/cryptocurrencies-top-pst/cryptocurrencies-top-pst.component';


@Component({
  selector: 'app-cryptocurrencies-top-ctn',
  imports: [CryptocurrenciesTopPstComponent],
  templateUrl: './cryptocurrencies-top-ctn.component.html',
  styleUrl: './cryptocurrencies-top-ctn.component.css',
})
export class CryptocurrenciesTopCtnComponent {
  private readonly cryptocurrenciesService = inject(CryptocurrenciesService);

  readonly coins = computed<Coin[]>(
      () => this.cryptocurrenciesService.coins.value() ?? []
  );

  private favorites = signal<Set<string>>(new Set());

  isFavorite(id: string): boolean {
    return this.favorites().has(id);
  }

  toggleWatchlist(coin: Coin) {
  const updated = new Set(this.favorites());

  if (updated.has(coin.id)) {
    updated.delete(coin.id);

    window.dispatchEvent(
      new CustomEvent(MFEvents.REMOVE_FROM_WATCHLIST, {
        detail: { coin }
      })
    );
  } else {
    updated.add(coin.id);

    window.dispatchEvent(
      new CustomEvent(MFEvents.ADD_TO_WATCHLIST, {
        detail: { coin }
      })
    );
  }

  this.favorites.set(updated);
}
}

