import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularGcExpenditureComponent } from './particular-gc-expenditure.component';

describe('ParticularGcExpenditureComponent', () => {
  let component: ParticularGcExpenditureComponent;
  let fixture: ComponentFixture<ParticularGcExpenditureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticularGcExpenditureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticularGcExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
