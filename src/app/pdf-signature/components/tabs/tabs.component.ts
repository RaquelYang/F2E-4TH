import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() fileData?: FileData[];

  tab = 1;

  constructor(private dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  uploadFile(event: any) {
    console.log('event', event[0]);
    if (event[0].type !== 'application/pdf') {
      // 跳出 alert dialog '您的檔案類型不是PDF檔!'
      this.dialog.open(AlertDialogComponent, {
        data: '您的檔案類型不是PDF檔!',
        width: '500px',
        height: '300px',
        panelClass: 'alert-dialog'
      });
      return
    }

    if (event[0].size > '3000000') {
      // 跳出 alert dialog '您的檔案太大了!'
      this.dialog.open(AlertDialogComponent, {
        data: '您的檔案太大了!',
        width: '500px',
        height: '300px',
        panelClass: 'alert-dialog'
      });
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

export interface FileData {
  createDate: Date,
  fileName: string,
  lastOpened: string,
  PDFtoBase64: string
}
