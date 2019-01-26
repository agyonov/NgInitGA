import { BrowserModule } from '@angular/platform-browser';
import { NgModule, PLATFORM_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleAnaliticsService } from './services/google-analitics.service';

export const GoogleAnaliticsServiceFactory = (gas: GoogleAnaliticsService) => {
  return () => {
    // download
    gas.loadScript();
  };
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: PLATFORM_INITIALIZER, useFactory: GoogleAnaliticsServiceFactory, deps: [GoogleAnaliticsService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
