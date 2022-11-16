import { Component, OnInit } from '@angular/core';
import { FileData } from '../components/tabs/tabs.component';

@Component({
  selector: 'app-pdf-signature-upload',
  templateUrl: './pdf-signature-upload.component.html',
  styleUrls: ['./pdf-signature-upload.component.scss']
})
export class PdfSignatureUploadComponent implements OnInit {
  fileData?: FileData[];
  links = [
    { name: '邀請他人簽署', navigate: '', disable: true },
    { name: '登入', navigate: 'login', disable: false },
  ]
  constructor() {}

  ngOnInit(): void {
    if (!localStorage.getItem('pdf-signature')) {
      return
    }
    this.fileData = JSON.parse(localStorage.getItem('pdf-signature') as string);

    if (this.fileData) {
      console.log('this.fileData', this.fileData);
      console.log('this.fileData', this.fileData[0].fileName);

    }
  }

}
