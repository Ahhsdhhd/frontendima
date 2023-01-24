import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCountryExpenditureReportComponent } from './by-country-expenditure-report.component';

describe('ByCountryExpenditureReportComponent', () => {
  let component: ByCountryExpenditureReportComponent;
  let fixture: ComponentFixture<ByCountryExpenditureReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByCountryExpenditureReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByCountryExpenditureReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
