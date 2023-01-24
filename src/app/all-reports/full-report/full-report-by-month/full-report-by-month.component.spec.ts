import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullReportByMonthComponent } from './full-report-by-month.component';

describe('FullReportByMonthComponent', () => {
  let component: FullReportByMonthComponent;
  let fixture: ComponentFixture<FullReportByMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullReportByMonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullReportByMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
