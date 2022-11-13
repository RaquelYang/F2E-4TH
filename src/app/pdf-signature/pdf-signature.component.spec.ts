import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfSignatureComponent } from './pdf-signature.component';

describe('PdfSignatureComponent', () => {
  let component: PdfSignatureComponent;
  let fixture: ComponentFixture<PdfSignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfSignatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
