import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
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
  @Output() tabValue: EventEmitter<number> = new EventEmitter();
  fileData!: FileData[];
  selected = 0;
  tab = 1;

  constructor(private dialog: MatDialog,) { }

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

  tabChange(val: number): void {
    this.tab = val;
    this.tabValue.emit(this.tab);
  }

  uploadFile(event: any) {
    console.log('event', event[0]);
    if (event[0].type !== 'application/pdf') {
      this.openAlertDialog('您的檔案類型不是PDF檔!');
      return
    }

    if (event[0].size > '3000000') {
      this.openAlertDialog('您的檔案太大了!');
      return
    }

    this.convertPDFtoBase64(event[0]).subscribe(base64 => {
      const data: FileData = {
        createDate: new Date(),
        fileName: event[0].name,
        lastOpened: '',
        PDFtoBase64: base64
      };

      this.fileData.push(data);

      localStorage.setItem('pdf-signature', JSON.stringify(this.fileData));
      this.openAlertDialog('成功上傳PDF!')
    });
  }

  convertPDFtoBase64(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event: any) => result.next(btoa(event.target.result.toString()));
    return result;
  }

  openAlertDialog(msg: string): void {
    this.dialog.open(AlertDialogComponent, {
      data: msg,
      width: '500px',
      height: '300px',
      panelClass: 'alert-dialog'
    });
  }

}

export interface FileData {
  createDate: Date,
  fileName: string,
  lastOpened: string,
  PDFtoBase64: string
}
