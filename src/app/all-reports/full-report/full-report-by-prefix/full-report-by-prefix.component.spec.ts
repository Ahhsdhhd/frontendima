import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullReportByPrefixComponent } from './full-report-by-prefix.component';

describe('FullReportByPrefixComponent', () => {
  let component: FullReportByPrefixComponent;
  let fixture: ComponentFixture<FullReportByPrefixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullReportByPrefixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullReportByPrefixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
