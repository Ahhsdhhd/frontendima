import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptBillNoDetailsTableComponent } from './receipt-bill-no-details-table.component';

describe('ReceiptBillNoDetailsTableComponent', () => {
  let component: ReceiptBillNoDetailsTableComponent;
  let fixture: ComponentFixture<ReceiptBillNoDetailsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptBillNoDetailsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptBillNoDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
