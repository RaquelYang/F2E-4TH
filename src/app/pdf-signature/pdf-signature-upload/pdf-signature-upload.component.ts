import { Component, OnInit } from '@angular/core';
import { FileData } from '../components/tabs/tabs.component';

@Component({
  selector: 'app-pdf-signature-upload',
  templateUrl: './pdf-signature-upload.component.html',
  styleUrls: ['./pdf-signature-upload.component.scss']
})
export class PdfSignatureUploadComponent implements OnInit {
  tab = 1;
  file!: FileData;
  fileData!: FileData[];
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
  }

  tabValue(val: number): void {
    this.tab = val;
  }

  selectedFile(file: FileData): void {
    this.file = file;
  }

  openFile(){;
    const idx = this.fileData.findIndex(data => {
      return data.createDate === this.file.createDate
    });

    this.fileData[idx].lastOpened = new Date();
    this.file.lastOpened = new Date();

    localStorage.setItem('pdf-signature', JSON.stringify(this.fileData));
    localStorage.setItem('pdf-signature-selected-file', JSON.stringify(this.file));
  }

}
