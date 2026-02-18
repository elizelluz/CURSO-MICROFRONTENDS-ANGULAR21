import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinTrendingMarketChartPstComponent } from './coin-trending-market-chart-pst.component';

describe('CoinTrendingMarketChartPstComponent', () => {
  let component: CoinTrendingMarketChartPstComponent;
  let fixture: ComponentFixture<CoinTrendingMarketChartPstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoinTrendingMarketChartPstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinTrendingMarketChartPstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
