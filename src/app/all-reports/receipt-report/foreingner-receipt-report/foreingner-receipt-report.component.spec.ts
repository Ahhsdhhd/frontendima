import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeingnerReceiptReportComponent } from './foreingner-receipt-report.component';

describe('ForeingnerReceiptReportComponent', () => {
  let component: ForeingnerReceiptReportComponent;
  let fixture: ComponentFixture<ForeingnerReceiptReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeingnerReceiptReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForeingnerReceiptReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
