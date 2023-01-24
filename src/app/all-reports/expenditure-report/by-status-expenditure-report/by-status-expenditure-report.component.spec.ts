import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByStatusExpenditureReportComponent } from './by-status-expenditure-report.component';

describe('ByStatusExpenditureReportComponent', () => {
  let component: ByStatusExpenditureReportComponent;
  let fixture: ComponentFixture<ByStatusExpenditureReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByStatusExpenditureReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByStatusExpenditureReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
