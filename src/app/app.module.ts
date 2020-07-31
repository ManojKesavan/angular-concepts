import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



import { HttpClientModule } from '@angular/common/http'; 
import {  AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

//import { HelloComponent } from './hello.component';
//import { HttpcallComponent } from './httpcall/httpcall.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,HttpClientModule ],
  declarations: [ AppComponent,HelloComponent],//, HelloComponent, HttpcallComponent.AwaitPromiseComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
