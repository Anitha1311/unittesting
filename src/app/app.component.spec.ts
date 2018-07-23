import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ExampleFormComponent } from './forms/example-form/example-form.component';
import { VoteComponent } from './event-emitters/vote/vote.component';
import { getCurrencies, GetCurrenciesComponent } from './arrays-and-strings/get-currencies/get-currencies.component';
import { GreetComponent } from './arrays-and-strings/greet/greet.component';
import { PrimengComponent } from './primeng/primeng.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ExampleFormComponent,
        VoteComponent,
        GetCurrenciesComponent,
        GreetComponent,
        PrimengComponent

      ],
      imports:[
        FormsModule,
ReactiveFormsModule,
HttpModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to unittesting!');
  }));
});
