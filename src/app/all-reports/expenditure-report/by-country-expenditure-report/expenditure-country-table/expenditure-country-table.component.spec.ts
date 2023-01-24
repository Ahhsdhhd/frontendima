import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureCountryTableComponent } from './expenditure-country-table.component';

describe('ExpenditureCountryTableComponent', () => {
  let component: ExpenditureCountryTableComponent;
  let fixture: ComponentFixture<ExpenditureCountryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenditureCountryTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenditureCountryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
