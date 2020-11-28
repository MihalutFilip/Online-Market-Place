import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { StorageService } from './services/storage.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthorizeService } from './services/authorize.service';
import { HttpAuthInterceptor } from './interceptors/auth.intereceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true},
    AuthGuard,
    LoginGuard,
    StorageService,
    AuthorizeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
