import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullReportByAmountComponent } from './full-report-by-amount.component';

describe('FullReportByAmountComponent', () => {
  let component: FullReportByAmountComponent;
  let fixture: ComponentFixture<FullReportByAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullReportByAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullReportByAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
