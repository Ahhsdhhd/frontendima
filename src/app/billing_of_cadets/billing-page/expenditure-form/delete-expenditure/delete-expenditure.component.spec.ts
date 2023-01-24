import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteExpenditureComponent } from './delete-expenditure.component';

describe('DeleteExpenditureComponent', () => {
  let component: DeleteExpenditureComponent;
  let fixture: ComponentFixture<DeleteExpenditureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteExpenditureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
