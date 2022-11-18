import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventWebsiteComponent } from './event-website/event-website.component';
import { PdfSignatureOpenFileComponent } from './pdf-signature/pdf-signature-open-file/pdf-signature-open-file.component';
import { PdfSignatureUploadComponent } from './pdf-signature/pdf-signature-upload/pdf-signature-upload.component';
import { PdfSignatureComponent } from './pdf-signature/pdf-signature.component';


const routes: Routes = [
  { path: 'event-website', component: EventWebsiteComponent},
  { path: 'pdf-signature',
    children: [
      { path: '', component: PdfSignatureComponent },
      { path: 'upload', component: PdfSignatureUploadComponent },
      { path: 'open-file', component: PdfSignatureOpenFileComponent },
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
