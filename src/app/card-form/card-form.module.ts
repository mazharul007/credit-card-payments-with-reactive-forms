import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFormComponent } from './card-form.component';



@NgModule({
  declarations: [ CardFormComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CardFormComponent
  ]
})
export class CardFormModule { }
