import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByAmountReceiptReportComponent } from './by-amount-receipt-report.component';

describe('ByAmountReceiptReportComponent', () => {
  let component: ByAmountReceiptReportComponent;
  let fixture: ComponentFixture<ByAmountReceiptReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByAmountReceiptReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByAmountReceiptReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
