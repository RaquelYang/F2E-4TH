import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
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
  @Output() selectedFile: EventEmitter<FileData> = new EventEmitter();
  fileData: FileData[] = [];
  selectedFileIndex!: number;
  tab = 1;

  constructor(private dialog: MatDialog,) { }

  ngOnInit(): void {
    if (!localStorage.getItem('pdf-signature')) {
      return
    }
    this.fileData = JSON.parse(localStorage.getItem('pdf-signature') as string);

    this.selectFile(0, this.fileData[0]);
  }

  tabChange(val: number): void {
    this.tab = val;
    this.tabValue.emit(this.tab);
  }

  selectFile(idx: number, file: FileData): void {
    this.selectedFileIndex = idx;
    this.selectedFile.emit(file);
  }

  uploadFile(event: any): void {
    console.log('event', event);
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

      this.openAlertDialog('成功上傳PDF!');
    });
  }

  uploadFileByInput(event: any): void {
    const file = event.target.files[0];

    if (file.type !== 'application/pdf') {
      this.openAlertDialog('您的檔案類型不是PDF檔!');
      return
    }

    if (file.size > '3000000') {
      this.openAlertDialog('您的檔案太大了!');
      return
    }

    this.convertPDFtoBase64(file).subscribe(base64 => {
      const data: FileData = {
        createDate: new Date(),
        fileName: file.name,
        lastOpened: '',
        PDFtoBase64: base64
      };

      this.fileData.push(data);

      localStorage.setItem('pdf-signature', JSON.stringify(this.fileData));

      this.openAlertDialog('成功上傳PDF!');
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
  lastOpened: Date | string,
  PDFtoBase64: string
}
