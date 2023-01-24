import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByMonthExpenditureReportComponent } from './by-month-expenditure-report.component';

describe('ByMonthExpenditureReportComponent', () => {
  let component: ByMonthExpenditureReportComponent;
  let fixture: ComponentFixture<ByMonthExpenditureReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByMonthExpenditureReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByMonthExpenditureReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
