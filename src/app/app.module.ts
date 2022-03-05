import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule ,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { ShowUserComponent } from './show-user/show-user.component';


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ShowUserComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormGroup,
    FormBuilder,
    Validators,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
