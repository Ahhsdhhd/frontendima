import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByGcExpenditureReportComponent } from './by-gc-expenditure-report.component';

describe('ByGcExpenditureReportComponent', () => {
  let component: ByGcExpenditureReportComponent;
  let fixture: ComponentFixture<ByGcExpenditureReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByGcExpenditureReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByGcExpenditureReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
