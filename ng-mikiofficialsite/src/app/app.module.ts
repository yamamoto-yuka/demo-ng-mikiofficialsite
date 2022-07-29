import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InViewportModule } from 'ng-in-viewport';
import { RecaptchaModule } from "ng-recaptcha";
import { NgPipesModule } from 'ngx-pipes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LiveComponent } from './live/live.component';
import { DiscographyComponent } from './discography/discography.component';
import { ContactComponent } from './contact/contact.component';
import { BiographyComponent } from './biography/biography.component';
import { FooterComponent } from './footer/footer.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { LoadingComponent } from './loading/loading.component';
import { PrecontactComponent } from './precontact/precontact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LiveComponent,
    DiscographyComponent,
    ContactComponent,
    BiographyComponent,
    FooterComponent,
    ConfirmComponent,
    LoadingComponent,
    PrecontactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgPipesModule,
    RecaptchaModule,
    InViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
