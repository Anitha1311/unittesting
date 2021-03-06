import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetComponent, greet } from './greet.component';

describe('GreetComponent', () => {
  let component: GreetComponent;
  let fixture: ComponentFixture<GreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should include the name in the message',() =>{
    expect(greet('Anitha')).toContain('Anitha');
  })
});
