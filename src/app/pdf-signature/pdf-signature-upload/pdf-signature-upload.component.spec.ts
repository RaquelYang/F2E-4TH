import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfSignatureUploadComponent } from './pdf-signature-upload.component';

describe('PdfSignatureUploadComponent', () => {
  let component: PdfSignatureUploadComponent;
  let fixture: ComponentFixture<PdfSignatureUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfSignatureUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfSignatureUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
