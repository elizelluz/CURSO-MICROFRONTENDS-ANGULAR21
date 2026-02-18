import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinTrendingCntComponent } from './coin-trending-cnt.component';

describe('CoinTrendingCntComponent', () => {
  let component: CoinTrendingCntComponent;
  let fixture: ComponentFixture<CoinTrendingCntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoinTrendingCntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinTrendingCntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
