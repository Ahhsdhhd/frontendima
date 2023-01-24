import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureByStatusTableComponent } from './expenditure-by-status-table.component';

describe('ExpenditureByStatusTableComponent', () => {
  let component: ExpenditureByStatusTableComponent;
  let fixture: ComponentFixture<ExpenditureByStatusTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenditureByStatusTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenditureByStatusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
