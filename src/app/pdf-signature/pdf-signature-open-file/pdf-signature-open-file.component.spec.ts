import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfSignatureOpenFileComponent } from './pdf-signature-open-file.component';

describe('PdfSignatureOpenFileComponent', () => {
  let component: PdfSignatureOpenFileComponent;
  let fixture: ComponentFixture<PdfSignatureOpenFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfSignatureOpenFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfSignatureOpenFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
