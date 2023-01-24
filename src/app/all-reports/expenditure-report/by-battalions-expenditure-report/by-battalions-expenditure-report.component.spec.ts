import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByBattalionsExpenditureReportComponent } from './by-battalions-expenditure-report.component';

describe('ByBattalionsExpenditureReportComponent', () => {
  let component: ByBattalionsExpenditureReportComponent;
  let fixture: ComponentFixture<ByBattalionsExpenditureReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByBattalionsExpenditureReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByBattalionsExpenditureReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
