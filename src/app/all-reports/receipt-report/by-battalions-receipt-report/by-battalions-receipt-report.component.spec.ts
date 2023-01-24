import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByBattalionsReceiptReportComponent } from './by-battalions-receipt-report.component';

describe('ByBattalionsReceiptReportComponent', () => {
  let component: ByBattalionsReceiptReportComponent;
  let fixture: ComponentFixture<ByBattalionsReceiptReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByBattalionsReceiptReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByBattalionsReceiptReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
