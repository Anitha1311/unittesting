import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.css']
})
export class ExampleFormComponent implements OnInit {
  submitted=false;
  checked=false;
  form: FormGroup;
fb: FormBuilder;
  constructor() {
    
    this.fb=new FormBuilder;
    this.form = this.fb.group({
      firstname:['',Validators.required,,Validators.minLength(2)],
      fullname:['', Validators.required],
      designation:['',Validators.required],
      empid : ['' ,[Validators.required,Validators.pattern(/^[8|6][0-9]{6}$/), ]],
      bloodgroup : ['', Validators.required],
      email:['',[Validators.required, Validators.pattern('^[a-z|A-Z][a-z|A-Z|0-9|]+@virtusa.com')]],
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
