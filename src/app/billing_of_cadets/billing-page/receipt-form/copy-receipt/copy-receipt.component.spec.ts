import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyReceiptComponent } from './copy-receipt.component';

describe('CopyReceiptComponent', () => {
  let component: CopyReceiptComponent;
  let fixture: ComponentFixture<CopyReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyReceiptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
