import { TestBed, inject } from '@angular/core/testing';

import { WelcomeService } from './welcome.service';

describe('WelcomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WelcomeService]
    });
  });

  it('should be created', inject([WelcomeService], (service: WelcomeService) => {
    expect(service).toBeTruthy();
  }));
  it('verify the Welcome service method is returning Welcome to Virtusa when name is Virtusa', inject([WelcomeService],
    (service:WelcomeService) => {
      expect(service.sayWelcome("Virtusa")).toBe('Welcome to ' + 'Virtusa');
}));
  it('verify the Welcome service method is returning Welcome to + <string>', inject([WelcomeService],
    (service:WelcomeService) => {
      expect(service.sayWelcome("Amazon")).toBe('Welcome to ' + 'Amazon');
  }));
});
