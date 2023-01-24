import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByPrefixReceiptReportComponent } from './by-prefix-receipt-report.component';

describe('ByPrefixReceiptReportComponent', () => {
  let component: ByPrefixReceiptReportComponent;
  let fixture: ComponentFixture<ByPrefixReceiptReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByPrefixReceiptReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByPrefixReceiptReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
