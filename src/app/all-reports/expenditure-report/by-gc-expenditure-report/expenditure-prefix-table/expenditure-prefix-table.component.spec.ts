import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditurePrefixTableComponent } from './expenditure-prefix-table.component';

describe('ExpenditurePrefixTableComponent', () => {
  let component: ExpenditurePrefixTableComponent;
  let fixture: ComponentFixture<ExpenditurePrefixTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenditurePrefixTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenditurePrefixTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
