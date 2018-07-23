import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor() { }
  sayWelcome(name) {
    if (name === 'Virtusa') {
      return "Welcome to " + 'Virtusa';
    }
    return "Welcome to " + name;
  }
}
