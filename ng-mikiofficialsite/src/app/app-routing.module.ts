import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './biography/biography.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ContactComponent } from './contact/contact.component';
import { DiscographyComponent } from './discography/discography.component';
import { HomeComponent } from './home/home.component';
import { LiveComponent } from './live/live.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'live', component: LiveComponent },
  { path: 'disc', component: DiscographyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'bio', component: BiographyComponent },
  {path:'confirm', component:ConfirmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
