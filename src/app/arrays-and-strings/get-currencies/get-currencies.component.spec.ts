import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCurrenciesComponent, getCurrencies } from './get-currencies.component';

describe('GetCurrenciesComponent', () => {
  let component: GetCurrenciesComponent;
  let fixture: ComponentFixture<GetCurrenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCurrenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return the supported currencies',() => {
    const result = getCurrencies();
    expect(result).toContain('Rs');
    expect(result).toContain('USD');
    expect(result).toContain('EUR');

  })
});
