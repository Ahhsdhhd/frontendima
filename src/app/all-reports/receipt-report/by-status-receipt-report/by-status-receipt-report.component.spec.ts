import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByStatusReceiptReportComponent } from './by-status-receipt-report.component';

describe('ByStatusReceiptReportComponent', () => {
  let component: ByStatusReceiptReportComponent;
  let fixture: ComponentFixture<ByStatusReceiptReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByStatusReceiptReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByStatusReceiptReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
