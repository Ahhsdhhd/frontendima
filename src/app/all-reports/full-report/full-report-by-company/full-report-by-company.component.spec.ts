import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullReportByCompanyComponent } from './full-report-by-company.component';

describe('FullReportByCompanyComponent', () => {
  let component: FullReportByCompanyComponent;
  let fixture: ComponentFixture<FullReportByCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullReportByCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullReportByCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
