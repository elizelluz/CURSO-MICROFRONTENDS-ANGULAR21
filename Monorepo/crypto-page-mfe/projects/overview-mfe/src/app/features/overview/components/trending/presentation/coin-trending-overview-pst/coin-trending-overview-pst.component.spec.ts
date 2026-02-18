import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinTrendingOverviewPstComponent } from './coin-trending-overview-pst.component';

describe('CoinTrendingOverviewPstComponent', () => {
  let component: CoinTrendingOverviewPstComponent;
  let fixture: ComponentFixture<CoinTrendingOverviewPstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoinTrendingOverviewPstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinTrendingOverviewPstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
