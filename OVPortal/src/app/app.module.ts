import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './shared/component/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { UserDetailsComponent } from './pages/users/user-details/user-details.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { SharedModule } from './shared/shared.module';
import { ErrorInterceptor } from './shared/interceptor/error.interceptor';
import { JwtInterceptor } from './shared/interceptor/jwt-interceptor.interceptor';
import { AlertModule } from 'ngx-bootstrap/alert';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './shared/interceptor/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    UsersListComponent,
    UserDetailsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AgGridModule,
    AppRoutingModule,
    HttpClientModule,    
    SharedModule,
    AlertModule.forRoot(),
    NgxSpinnerModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
