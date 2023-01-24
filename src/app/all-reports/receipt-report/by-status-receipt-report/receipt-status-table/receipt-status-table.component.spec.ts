import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptStatusTableComponent } from './receipt-status-table.component';

describe('ReceiptStatusTableComponent', () => {
  let component: ReceiptStatusTableComponent;
  let fixture: ComponentFixture<ReceiptStatusTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptStatusTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptStatusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
