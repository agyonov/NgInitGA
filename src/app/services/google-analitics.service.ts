import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleAnaliticsService {

  // The source for the load
  private googleAnaliticsScript = {
    loaded: false,
    url: 'https://www.google-analytics.com/analytics.js'
  };

  constructor() { }

  private loadScript() {
    
  }
}
