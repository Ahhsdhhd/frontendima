import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCountryReceiptReportComponent } from './by-country-receipt-report.component';

describe('ByCountryReceiptReportComponent', () => {
  let component: ByCountryReceiptReportComponent;
  let fixture: ComponentFixture<ByCountryReceiptReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByCountryReceiptReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByCountryReceiptReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
