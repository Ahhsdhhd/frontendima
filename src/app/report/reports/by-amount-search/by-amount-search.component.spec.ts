import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByAmountSearchComponent } from './by-amount-search.component';

describe('ByAmountSearchComponent', () => {
  let component: ByAmountSearchComponent;
  let fixture: ComponentFixture<ByAmountSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByAmountSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByAmountSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
