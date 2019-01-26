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

  public send(pageUrl: string): void {
    // Send
    window.ga('set', 'page', pageUrl);
    window.ga('send', 'pageview');
  }

  public loadScript(): void {
    // Check already loaded
    if (!this.googleAnaliticsScript.loaded) {
      // Check if we are at browser
      if (isPlatformBrowser(this.platformId)) {
        // Create new element
        const scriptElm: HTMLScriptElement = this.dom.createElement('script');
        scriptElm.src = this.googleAnaliticsScript.url;
        scriptElm.type = 'text/javascript';
        scriptElm.async = true;
        scriptElm.onload = () => {
          // Prevent from load second time
          this.googleAnaliticsScript.loaded = true;
        };

        // set it
        window.ga = window.ga || function () { (window.ga.q = window.ga.q || []).push(arguments); };
        window.ga.l = +new Date;

        // Set some stuff
        window.ga('create', environment.propertyID, 'auto');

        // Add to document
        this.dom.body.appendChild(scriptElm);
      }
    }
  }
}
