import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByAmountExpenditureReportComponent } from './by-amount-expenditure-report.component';

describe('ByAmountExpenditureReportComponent', () => {
  let component: ByAmountExpenditureReportComponent;
  let fixture: ComponentFixture<ByAmountExpenditureReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByAmountExpenditureReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByAmountExpenditureReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
