import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullReportByGcComponent } from './full-report-by-gc.component';

describe('FullReportByGcComponent', () => {
  let component: FullReportByGcComponent;
  let fixture: ComponentFixture<FullReportByGcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullReportByGcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullReportByGcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
