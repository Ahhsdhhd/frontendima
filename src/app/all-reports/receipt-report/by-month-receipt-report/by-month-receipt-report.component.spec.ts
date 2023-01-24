import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByMonthReceiptReportComponent } from './by-month-receipt-report.component';

describe('ByMonthReceiptReportComponent', () => {
  let component: ByMonthReceiptReportComponent;
  let fixture: ComponentFixture<ByMonthReceiptReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByMonthReceiptReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByMonthReceiptReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
