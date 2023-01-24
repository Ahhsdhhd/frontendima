import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByBillNoDetailsExpenditureReportComponent } from './by-bill-no-details-expenditure-report.component';

describe('ByBillNoDetailsExpenditureReportComponent', () => {
  let component: ByBillNoDetailsExpenditureReportComponent;
  let fixture: ComponentFixture<ByBillNoDetailsExpenditureReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByBillNoDetailsExpenditureReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByBillNoDetailsExpenditureReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
