import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptDateTableComponent } from './receipt-date-table.component';

describe('ReceiptDateTableComponent', () => {
  let component: ReceiptDateTableComponent;
  let fixture: ComponentFixture<ReceiptDateTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptDateTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptDateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
