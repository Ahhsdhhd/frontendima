import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptBattalionTableComponent } from './receipt-battalion-table.component';

describe('ReceiptBattalionTableComponent', () => {
  let component: ReceiptBattalionTableComponent;
  let fixture: ComponentFixture<ReceiptBattalionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptBattalionTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptBattalionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
