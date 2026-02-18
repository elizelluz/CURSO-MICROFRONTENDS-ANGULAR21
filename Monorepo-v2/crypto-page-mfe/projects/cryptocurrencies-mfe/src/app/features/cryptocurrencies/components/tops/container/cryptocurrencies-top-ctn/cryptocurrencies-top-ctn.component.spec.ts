import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocurrenciesTopCtnComponent } from './cryptocurrencies-top-ctn.component';

describe('CryptocurrenciesTopCtnComponent', () => {
  let component: CryptocurrenciesTopCtnComponent;
  let fixture: ComponentFixture<CryptocurrenciesTopCtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptocurrenciesTopCtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptocurrenciesTopCtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
