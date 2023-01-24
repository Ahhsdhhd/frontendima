import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillNoDetailsSearchComponent } from './bill-no-details-search.component';

describe('BillNoDetailsSearchComponent', () => {
  let component: BillNoDetailsSearchComponent;
  let fixture: ComponentFixture<BillNoDetailsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillNoDetailsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillNoDetailsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
