import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeingnerExpenditureReportComponent } from './foreingner-expenditure-report.component';

describe('ForeingnerExpenditureReportComponent', () => {
  let component: ForeingnerExpenditureReportComponent;
  let fixture: ComponentFixture<ForeingnerExpenditureReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeingnerExpenditureReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForeingnerExpenditureReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
