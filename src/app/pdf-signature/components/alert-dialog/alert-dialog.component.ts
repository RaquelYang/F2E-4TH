import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {
  msg = '';

  constructor(@Inject(MAT_DIALOG_DATA) private data: string) {
    this.msg = data
  }

  ngOnInit(): void {
  }

}
