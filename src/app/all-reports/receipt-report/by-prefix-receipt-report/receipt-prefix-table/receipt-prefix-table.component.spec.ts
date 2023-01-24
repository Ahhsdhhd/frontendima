import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptPrefixTableComponent } from './receipt-prefix-table.component';

describe('ReceiptPrefixTableComponent', () => {
  let component: ReceiptPrefixTableComponent;
  let fixture: ComponentFixture<ReceiptPrefixTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptPrefixTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptPrefixTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
