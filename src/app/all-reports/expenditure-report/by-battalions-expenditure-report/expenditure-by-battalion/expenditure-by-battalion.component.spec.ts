import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureByBattalionComponent } from './expenditure-by-battalion.component';

describe('ExpenditureByBattalionComponent', () => {
  let component: ExpenditureByBattalionComponent;
  let fixture: ComponentFixture<ExpenditureByBattalionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenditureByBattalionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenditureByBattalionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
