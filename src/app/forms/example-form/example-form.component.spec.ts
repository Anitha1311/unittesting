import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ExampleFormComponent } from './example-form.component';
//import { FormBuider } from './example-form.component';

describe('ExampleFormComponent', () => {
  let component: ExampleFormComponent;
  let fixture: ComponentFixture<ExampleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    component = new ExampleFormComponent(new FormBuilder());
    fixture = TestBed.createComponent(ExampleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create a form with 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });
  it('should make the name control required',() => {
    let control = component.form.get('name');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  })
});
