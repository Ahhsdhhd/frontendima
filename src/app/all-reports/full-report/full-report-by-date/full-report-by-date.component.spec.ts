import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullReportByDateComponent } from './full-report-by-date.component';

describe('FullReportByDateComponent', () => {
  let component: FullReportByDateComponent;
  let fixture: ComponentFixture<FullReportByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullReportByDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullReportByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
