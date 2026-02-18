import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocurrenciesTopPstComponent } from './cryptocurrencies-top-pst.component';

describe('CryptocurrenciesTopPstComponent', () => {
  let component: CryptocurrenciesTopPstComponent;
  let fixture: ComponentFixture<CryptocurrenciesTopPstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptocurrenciesTopPstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptocurrenciesTopPstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
