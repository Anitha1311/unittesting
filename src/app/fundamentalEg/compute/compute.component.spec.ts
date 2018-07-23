import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputeComponent, compute } from './compute.component';

describe('ComputeComponent', () => {
  let component: ComputeComponent;
  let fixture: ComponentFixture<ComputeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return 0 if input is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  })
  it('should increment the input if it is positive', () => {
    const result = compute(1);
    expect(result).toBe(2);
  })

});
