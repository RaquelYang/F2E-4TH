import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventWebsiteComponent } from './event-website/event-website.component';
import { PdfSignatureComponent } from './pdf-signature/pdf-signature.component';

const routes: Routes = [
  { path: 'event-website', component: EventWebsiteComponent},
  { path: 'pdf-signature', component: PdfSignatureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
