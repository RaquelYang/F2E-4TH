import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventWebsiteComponent } from './event-website/event-website.component';
import { PdfSignatureComponent } from './pdf-signature/pdf-signature.component';
import { PdfSignatureUploadComponent } from './pdf-signature/pdf-signature-upload/pdf-signature-upload.component';
import { ProgressBarComponent } from './pdf-signature/components/progress-bar/progress-bar.component';
import { TabsComponent } from './pdf-signature/components/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    EventWebsiteComponent,
    PdfSignatureComponent,
    PdfSignatureUploadComponent,
    ProgressBarComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
