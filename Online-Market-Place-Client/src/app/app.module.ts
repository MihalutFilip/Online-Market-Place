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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorizeService } from './services/authorize.service';
import { HttpAuthInterceptor } from './interceptors/auth.intereceptor';
import { UsersComponent } from './components/users/users.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from "@angular/material/radio";
import { DeleteConfirmationModal } from './modals/delete-confirmation/delete-confirmation';
import { MatIconModule } from '@angular/material/icon';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModal } from './modals/user-modal/user-modal';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginCommunicationService } from './services/communcation-services/login-communication.service';
import { InitialsPipe } from './pipes/initials.pipe';
import { RegisterComponent } from './components/register/register.component';
import { MatDividerModule } from '@angular/material/divider';
import { HeaderComponent } from './components/header/header.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProductTypeModal } from './modals/product-type-modal/product-type-modal';
import { MatChipsModule } from '@angular/material/chips';
import { DataTypePipe } from './pipes/data-type.pipe';
import { ProductTypeComponent } from './components/product-type/product-type.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UsersComponent,
    DeleteConfirmationModal,
    UserModal,
    InitialsPipe,
    RegisterComponent,
    HeaderComponent,
    ProductTypeComponent,
    ProductTypeModal,
    DataTypePipe,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDividerModule,
    MatExpansionModule,
    MatChipsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true},
    AuthGuard,
    LoginGuard,
    StorageService,
    AuthorizeService,
    LoginCommunicationService
  ],
  entryComponents: [
    DeleteConfirmationModal,
    UserModal,
    ProductTypeModal
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
