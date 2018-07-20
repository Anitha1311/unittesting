import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-currencies',
  templateUrl: './get-currencies.component.html',
  styleUrls: ['./get-currencies.component.css']
})
export class GetCurrenciesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export function getCurrencies(){
  return ['Rs','USD','EUR'];
}