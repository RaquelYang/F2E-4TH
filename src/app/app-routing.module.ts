import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventWebsiteComponent } from './event-website/event-website.component';

const routes: Routes = [
  { path: 'event-website', component: EventWebsiteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
