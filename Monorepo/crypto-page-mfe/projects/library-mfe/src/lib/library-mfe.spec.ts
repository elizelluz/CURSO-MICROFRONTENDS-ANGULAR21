import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryMfe } from './library-mfe';

describe('LibraryMfe', () => {
  let component: LibraryMfe;
  let fixture: ComponentFixture<LibraryMfe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryMfe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryMfe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
