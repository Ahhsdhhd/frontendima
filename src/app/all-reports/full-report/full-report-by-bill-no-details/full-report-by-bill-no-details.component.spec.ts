import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullReportByBillNoDetailsComponent } from './full-report-by-bill-no-details.component';

describe('FullReportByBillNoDetailsComponent', () => {
  let component: FullReportByBillNoDetailsComponent;
  let fixture: ComponentFixture<FullReportByBillNoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullReportByBillNoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullReportByBillNoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
