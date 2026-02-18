import { Injectable,effect,inject, resource, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coin } from '../models/coin.interface';
@Injectable({
  providedIn: 'root',
})
export class MarketService {

  private baseUrl = 'https://api.coingecko.com/api/v3/coins/markets';
  private apiKey = 'CG-NwAkedUgrP87beWvmS3ZH9GF';


  http = inject(HttpClient);

  private coinId = signal<string | null>(null);

  coin = signal<Coin | null>(null);


  constructor() {
    effect(async () => {
      const id = this.coinId();
      if (!id) {
        this.coin.set(null);
        return;
      }

      const res = await fetch(`${this.baseUrl}?ids=${id}&vs_currency=usd&x_cg_demo_api_key=${this.apiKey}`);
      if (!res.ok) {
        this.coin.set(null);
        return;
      }
      this.coin.set((await res.json()));

    });
  }

  findById(id: string) {
    this.coinId.set(id);
  }

  coins = resource<Coin[], void>({
    loader: async () => {
      const res = await fetch(`${this.baseUrl}?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&x_cg_demo_api_key=${this.apiKey}`);
      if (!res.ok) throw new Error('Error loading coins');
      return res.json();
    }
  });

}
