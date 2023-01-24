import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureAmountTableComponent } from './expenditure-amount-table.component';

describe('ExpenditureAmountTableComponent', () => {
  let component: ExpenditureAmountTableComponent;
  let fixture: ComponentFixture<ExpenditureAmountTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenditureAmountTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenditureAmountTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
