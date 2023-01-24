import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByDateExpenditureReportComponent } from './by-date-expenditure-report.component';

describe('ByDateExpenditureReportComponent', () => {
  let component: ByDateExpenditureReportComponent;
  let fixture: ComponentFixture<ByDateExpenditureReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByDateExpenditureReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByDateExpenditureReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
