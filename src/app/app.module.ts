import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventWebsiteComponent } from './event-website/event-website.component';
import { PdfSignatureComponent } from './pdf-signature/pdf-signature.component';
import { PdfSignatureUploadComponent } from './pdf-signature/pdf-signature-upload/pdf-signature-upload.component';
import { ProgressBarComponent } from './pdf-signature/components/progress-bar/progress-bar.component';
import { TabsComponent } from './pdf-signature/components/tabs/tabs.component';
import { UploadDirective } from './directive/upload/upload.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { AlertDialogComponent } from './pdf-signature/components/alert-dialog/alert-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import { PdfSignatureOpenFileComponent } from './pdf-signature/pdf-signature-open-file/pdf-signature-open-file.component';
import { SidebarComponent } from './pdf-signature/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    EventWebsiteComponent,
    PdfSignatureComponent,
    PdfSignatureUploadComponent,
    ProgressBarComponent,
    TabsComponent,
    UploadDirective,
    AlertDialogComponent,
    PdfSignatureOpenFileComponent,
    SidebarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [MatDialogModule]
})
export class AppModule { }
