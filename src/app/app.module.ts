import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpService} from "./service/http.service";
import {UserService} from "./service/user.service";
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SecondScreenComponent } from './second-screen/second-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondScreenComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
  providers: [HttpService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
