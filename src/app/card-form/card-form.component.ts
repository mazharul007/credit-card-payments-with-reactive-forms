import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {


  // This cardFrom property represents our whole form
  cardForm = new FormGroup({
     name: new FormControl('', [
       Validators.required,
       Validators.minLength(5)]
    )
  })
  constructor() { 
    console.log(this.cardForm.controls.name)
  }

  ngOnInit(): void {
  }

}
