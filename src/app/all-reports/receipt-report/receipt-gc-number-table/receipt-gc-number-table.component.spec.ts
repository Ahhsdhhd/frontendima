import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptGcNumberTableComponent } from './receipt-gc-number-table.component';

describe('ReceiptGcNumberTableComponent', () => {
  let component: ReceiptGcNumberTableComponent;
  let fixture: ComponentFixture<ReceiptGcNumberTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptGcNumberTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptGcNumberTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
