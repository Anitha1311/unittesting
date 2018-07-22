import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengComponent } from './primeng.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

describe('PrimengComponent', () => {
  let component: PrimengComponent;
  let fixture: ComponentFixture<PrimengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpModule
      ]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    it('should create a form with 2 controls', () => {
    expect(component.form.contains('username')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();

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
  

});