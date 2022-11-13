import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-signature',
  templateUrl: './pdf-signature.component.html',
  styleUrls: ['./pdf-signature.component.scss']
})
export class PdfSignatureComponent implements OnInit {
  links = [
    { name: '邀請他人簽署', navigate: '', disable: true },
    { name: '簽署新文件', navigate: 'signature-new-document', disable: false },
    { name: '登入', navigate: 'login', disable: false },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
