import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByDateReceiptReportComponent } from './by-date-receipt-report.component';

describe('ByDateReceiptReportComponent', () => {
  let component: ByDateReceiptReportComponent;
  let fixture: ComponentFixture<ByDateReceiptReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByDateReceiptReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByDateReceiptReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
