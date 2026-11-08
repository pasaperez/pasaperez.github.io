import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import {LocationStrategy, TrailingSlashPathLocationStrategy} from '@angular/common';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    {provide: LocationStrategy, useClass: TrailingSlashPathLocationStrategy}
  ]
};
