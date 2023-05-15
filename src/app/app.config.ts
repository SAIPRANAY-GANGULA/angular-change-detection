import { ApplicationConfig, NgZone } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: NgZone,
      useValue: new NgZone({ shouldCoalesceEventChangeDetection: false }),
    },
  ],
};
