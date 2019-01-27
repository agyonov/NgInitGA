import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment';

// Typescript extention of Window interface
declare global {
  interface Window { ga: any; }
}

@Injectable({
  providedIn: 'root'
})
export class GoogleAnaliticsService {

  // The source for the load
  private googleAnaliticsScript = {
    loaded: false,
    url: 'https://www.google-analytics.com/analytics.js'
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private dom: Document) {
  }

  // Send page view event to Google Analytics
  public send(pageUrl: string): void {
    // Send
    window.ga('set', 'page', pageUrl);
    window.ga('send', 'pageview');
  }

  // Send event tracking event to Google Analytics
  public event(eventCategory: string, eventAction: string): void {
    // Send
    window.ga('send', 'event', eventCategory, eventAction);
  }

  // Init the GA infrastructure
  public loadScript(): void {
    // Check already loaded
    if (!this.googleAnaliticsScript.loaded) {
      // Check if we are at browser
      if (isPlatformBrowser(this.platformId)) {
        // Create new scipt element
        const scriptElm: HTMLScriptElement = this.dom.createElement('script');
        scriptElm.src = this.googleAnaliticsScript.url;
        scriptElm.type = 'text/javascript';
        scriptElm.async = true;
        scriptElm.onload = () => {
          // Prevent from load second time
          this.googleAnaliticsScript.loaded = true;
        };

        // Define GA object
        window.ga = window.ga || function () { (window.ga.q = window.ga.q || []).push(arguments); };
        window.ga.l = +new Date;

        // Set some Google Analytics stuff
        window.ga('create', environment.propertyID, 'auto');

        // Add to document
        this.dom.body.appendChild(scriptElm);
      }
    }
  }
}
