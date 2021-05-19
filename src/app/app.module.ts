import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';

import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductlistComponent } from './productlist/productlist.component';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule,ReactiveFormsModule}from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ForgetComponent } from './forget/forget.component';
import { SubjectPageComponent } from './subject/subject-page/subject-page.component';
import { SyllabusPageComponent } from './syllabus/syllabus-page/syllabus-page.component'



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    MenuComponent,
    LogoutComponent,
    ProductlistComponent,
    SignupComponent,
    ForgetComponent,
    SubjectPageComponent,
    SyllabusPageComponent,
    

    
   
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
