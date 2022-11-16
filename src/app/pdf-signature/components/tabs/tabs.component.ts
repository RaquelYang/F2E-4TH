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
  base64Output = '';


  constructor() { }

  ngOnInit(): void {
  }

  uploadFile(event: any) {
  let payload = new FormData();
  payload.append('data', event[0]);
  console.log('event', event);
    this.convertPDFtoBase64(event[0]).subscribe(base64 => {
      this.base64Output = base64;
      console.log('base64', base64);
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
