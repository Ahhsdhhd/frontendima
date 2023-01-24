import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullReportByForeingnerComponent } from './full-report-by-foreingner.component';

describe('FullReportByForeingnerComponent', () => {
  let component: FullReportByForeingnerComponent;
  let fixture: ComponentFixture<FullReportByForeingnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullReportByForeingnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullReportByForeingnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
