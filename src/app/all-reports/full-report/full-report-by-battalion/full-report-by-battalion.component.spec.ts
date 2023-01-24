import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullReportByBattalionComponent } from './full-report-by-battalion.component';

describe('FullReportByBattalionComponent', () => {
  let component: FullReportByBattalionComponent;
  let fixture: ComponentFixture<FullReportByBattalionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullReportByBattalionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullReportByBattalionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
