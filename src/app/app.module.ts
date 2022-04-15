import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardFormComponent } from './card-form/card-form.component';
import { CardFormModule } from './card-form/card-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CardFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
