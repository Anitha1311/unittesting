import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api

@Component({
  selector: 'app-primeng',
  templateUrl: './primeng.component.html',
  styleUrls: ['./primeng.component.css']
})
export class PrimengComponent implements OnInit {
  submitted=false;
  checked=false;
  form: FormGroup;
fb: FormBuilder;
  constructor() {
    this.form = new FormGroup({
       firstName: new FormControl()
    });
    this.fb=new FormBuilder;
    this.form = this.fb.group({
      username:['',Validators.required,Validators.minLength(2)],
      password:['',Validators.required, Validators.minLength(8)]
    })
   }
   onSubmit():void{
    this.submitted=true;
  }
  click(){
    this.checked=true;
  }

  

  ngOnInit() {
  }

}
