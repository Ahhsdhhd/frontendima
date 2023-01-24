import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureGcnumberTableComponent } from './expenditure-gcnumber-table.component';

describe('ExpenditureGcnumberTableComponent', () => {
  let component: ExpenditureGcnumberTableComponent;
  let fixture: ComponentFixture<ExpenditureGcnumberTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenditureGcnumberTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenditureGcnumberTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
