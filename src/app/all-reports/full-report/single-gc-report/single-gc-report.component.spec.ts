import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGcReportComponent } from './single-gc-report.component';

describe('SingleGcReportComponent', () => {
  let component: SingleGcReportComponent;
  let fixture: ComponentFixture<SingleGcReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleGcReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleGcReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
