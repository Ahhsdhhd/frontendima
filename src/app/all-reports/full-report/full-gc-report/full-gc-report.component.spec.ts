import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullGcReportComponent } from './full-gc-report.component';

describe('FullGcReportComponent', () => {
  let component: FullGcReportComponent;
  let fixture: ComponentFixture<FullGcReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullGcReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullGcReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
