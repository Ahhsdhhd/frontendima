import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyExpenditureComponent } from './copy-expenditure.component';

describe('CopyExpenditureComponent', () => {
  let component: CopyExpenditureComponent;
  let fixture: ComponentFixture<CopyExpenditureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyExpenditureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
