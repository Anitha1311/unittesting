import { Component, OnInit } from '@angular/core';

 @Component({
  selector: 'app-compute',
   templateUrl: './compute.component.html',
   styleUrls: ['./compute.component.css']
 })
 export class ComputeComponent implements OnInit {
 

   constructor() { }

 ngOnInit() {
    
  }

}
export function compute(number){
  if(number<0)
  return 0;
  return number+1;
}