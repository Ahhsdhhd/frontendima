import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullReportByStatusComponent } from './full-report-by-status.component';

describe('FullReportByStatusComponent', () => {
  let component: FullReportByStatusComponent;
  let fixture: ComponentFixture<FullReportByStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullReportByStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullReportByStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
