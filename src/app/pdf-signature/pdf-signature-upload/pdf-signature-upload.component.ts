import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-signature-upload',
  templateUrl: './pdf-signature-upload.component.html',
  styleUrls: ['./pdf-signature-upload.component.scss']
})
export class PdfSignatureUploadComponent implements OnInit {
  links = [
    { name: '邀請他人簽署', navigate: '', disable: true },
    { name: '登入', navigate: 'login', disable: false },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
