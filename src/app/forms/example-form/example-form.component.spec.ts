import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ExampleFormComponent } from './example-form.component';
import { HttpModule } from '@angular/http';


//import { FormBuider } from './example-form.component';

describe('ExampleFormComponent', () => {
  let component: ExampleFormComponent;
  let fixture: ComponentFixture<ExampleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleFormComponent ],
      imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ]
     // import: [ReactiveFormsModule,FormsModule,HttpModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    component = new ExampleFormComponent();
    fixture = TestBed.createComponent(ExampleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create a form with 6 controls', () => {
    expect(component.form.contains('firstname')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('fullname')).toBeTruthy();
    expect(component.form.contains('designation')).toBeTruthy();
    expect(component.form.contains('empid')).toBeTruthy();
    expect(component.form.contains('bloodgroup')).toBeTruthy();
  });
  it('should make the name control required',() => {
    console.log("Form",component.form);
    console.log("Form firstName", component.form.get('firstname'));
    let control = component.form.get('firstname');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
   it('email field validity', () => {
     let errors = {};
     console.log("Form",component.form);
     console.log("Form email", component.form.get('email'));
 
     let email = component.form.get('email');
     email.setValue('');
    expect(email.valid).toBeFalsy();

     // Email field is required
     errors = email.errors || {};
     expect(errors['required']).toBeTruthy();

     // Set email to something
     email.setValue("test");
     errors = email.errors || {};
     expect(errors['required']).toBeFalsy();
     expect(errors['pattern']).toBeTruthy();

     // Set email to something correct
     email.setValue("test@virtusa.com");
     errors = email.errors || {};
     expect(errors['required']).toBeFalsy();
     expect(errors['pattern']).toBeFalsy();
   }); 
   it('empid field validity', () => {
     let errors={};
      console.log("Form",component.form);
    console.log("Form firstName", component.form.get('empid'));

    let empid=component.form.get('empid');
    empid.setValue(''); 
    errors = empid.errors || {};
    expect(errors['required']).toBeTruthy();
    empid.setValue("test");
    errors = empid.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();
  });
  it('should set submitted to true',async(()=>{
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));
  it('should call onsubmit method',async(()=>{
    fixture.detectChanges();
    spyOn(component,'onSubmit');
    // el=fixture.debugElement.query(By.css('button')).nativeElement;
    // el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }));
  it('submitting a form', () => {
    expect(component.form.contains('firstname')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('fullname')).toBeTruthy();
    expect(component.form.contains('designation')).toBeTruthy();
    expect(component.form.contains('empid')).toBeTruthy();
    expect(component.form.contains('bloodgroup')).toBeTruthy();
  });
  


 

// it('should', async(() => {
//   spyOn(component, 'onEditButtonClick');

//   let button = fixture.debugElement.nativeElement.querySelector('button');
//   button.click();

//   fixture.whenStable().then(() => {
//     expect(component.onEditButtonClick).toHaveBeenCalled();
//   })
// }));

});
