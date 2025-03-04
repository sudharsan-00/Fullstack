import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // ✅ Correct Import

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()), // ✅ Ensure proper routing
    provideHttpClient()
  ]
})
.catch(err => console.error(err));
