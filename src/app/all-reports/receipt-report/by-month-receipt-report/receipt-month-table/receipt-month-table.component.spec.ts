import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptMonthTableComponent } from './receipt-month-table.component';

describe('ReceiptMonthTableComponent', () => {
  let component: ReceiptMonthTableComponent;
  let fixture: ComponentFixture<ReceiptMonthTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptMonthTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptMonthTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
