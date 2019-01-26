import { BrowserModule } from '@angular/platform-browser';
import { NgModule, PLATFORM_INITIALIZER, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleAnaliticsService } from './services/google-analitics.service';

// Factory provider for Angular. Provides function to be executed on Angular application startup
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
    // Provides function to be executed on Angular application startup
    {
      provide: APP_INITIALIZER,
      useFactory: GoogleAnaliticsServiceFactory,
      deps: [GoogleAnaliticsService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
