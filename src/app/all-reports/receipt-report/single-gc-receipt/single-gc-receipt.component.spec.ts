import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGcReceiptComponent } from './single-gc-receipt.component';

describe('SingleGcReceiptComponent', () => {
  let component: SingleGcReceiptComponent;
  let fixture: ComponentFixture<SingleGcReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleGcReceiptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleGcReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
