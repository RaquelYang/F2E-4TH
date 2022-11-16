import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  tab = 1;

  constructor() { }

  ngOnInit(): void {
  }

  uploadFile(event: any) {
    console.log('event', event[0]);
    if (event[0].type !== 'application/pdf') {
      // 跳出 alert dialog '您的檔案類型不是PDF檔!'
      return
    }

    if (event[0].size > '5000000') {
      // 跳出 alert dialog '您的檔案太大了!'
      return
    }

    this.convertPDFtoBase64(event[0]).subscribe(base64 => {
      // 成功轉成 base64, 後續把它存到 localStorage

      const data: FileData[] = [{
        createDate: new Date(),
        fileName: event[0].name,
        lastOpened: '',
        PDFtoBase64: base64
      }];

      console.log('data', data);

      localStorage.setItem('pdf-signature', JSON.stringify(data));

    });
  }

  convertPDFtoBase64(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event: any) => result.next(btoa(event.target.result.toString()));
    return result;
  }

}

interface FileData {
  createDate: Date,
  fileName: string,
  lastOpened: string,
  PDFtoBase64: string
}
