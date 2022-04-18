import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFormComponent } from './card-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ CardFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ],
  exports:[
    CardFormComponent
  ]
})
export class CardFormModule { }
