import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByBillNoDetailsReceiptReportComponent } from './by-bill-no-details-receipt-report.component';

describe('ByBillNoDetailsReceiptReportComponent', () => {
  let component: ByBillNoDetailsReceiptReportComponent;
  let fixture: ComponentFixture<ByBillNoDetailsReceiptReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByBillNoDetailsReceiptReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByBillNoDetailsReceiptReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
