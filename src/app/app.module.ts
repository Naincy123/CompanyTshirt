import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppchildComponent } from './appchild/appchild.component';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    AppchildComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
