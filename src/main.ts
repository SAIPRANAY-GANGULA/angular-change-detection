import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    // ngZone: 'noop', // CD doesn't work if we disable Zone.js
  })
  .catch((err) => console.error(err));
