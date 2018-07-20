import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
//import { IdFormComponent } from './id-form/id-form.component';
import { ComputeComponent } from './fundamentals/compute/compute.component';
import { GreetComponent } from './arrays-and-strings/greet/greet.component';
import { GetCurrenciesComponent } from './arrays-and-strings/get-currencies/get-currencies.component';
import { VoteComponent } from './setup-and-teardown/vote/vote.component';
import { ExampleFormComponent } from './forms/example-form/example-form.component';


@NgModule({
  declarations: [
    AppComponent,
   // IdFormComponent,
    ComputeComponent,
   GreetComponent,
   GetCurrenciesComponent,
   VoteComponent,
   ExampleFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
