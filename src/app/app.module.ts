import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
//import { IdFormComponent } from './id-form/id-form.component';
import { ComputeComponent } from './fundamentalEg/compute/compute.component';
import { GreetComponent } from './arrays-and-strings/greet/greet.component';
import { GetCurrenciesComponent } from './arrays-and-strings/get-currencies/get-currencies.component';
import { VoteComponent } from './voting/vote/vote.component';
import { ExampleFormComponent } from './forms/example-form/example-form.component';
import { PrimengComponent } from './primeng/primeng.component';
//import { ExampleServiceComponent } from './service/example-service/example-service.component';


@NgModule({
  declarations: [
    AppComponent,
   // IdFormComponent,
    ComputeComponent,
   GreetComponent,
   GetCurrenciesComponent,
   VoteComponent,
   ExampleFormComponent,
   PrimengComponent,
   //ExampleServiceComponent
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
