import { loadRemoteModule } from '@angular-architects/native-federation';
import { JsonPipe, NgComponentOutlet } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, effect, inject, Injector, OnInit, signal, Type } from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [
        NgComponentOutlet
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  private injector=inject(Injector);

  cryptocurrenciesTops = signal<Type<unknown> | null>(null);

  constructor() {
    effect(() => {

      // Tops
      loadRemoteModule('cryptocurrenciesMfe', './CryptocurrenciesTopCtnComponent')
        .then((m) => {
          this.cryptocurrenciesTops.set(m.CryptocurrenciesTopCtnComponent);
        })
        .catch(console.error);
    });
  }

 }





