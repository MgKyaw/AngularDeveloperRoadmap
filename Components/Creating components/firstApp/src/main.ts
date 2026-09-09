import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

//   // main.ts
// bootstrapApplication(App, {
//   providers: [
//     {provide: API_BASE_URL, useValue: 'https://api.example.com'},
//     {provide: INTERCEPTOR_TOKEN, useClass: AuthInterceptor, multi: true},
//     LoggingService, // Used throughout the app
//     {provide: ErrorHandler, useClass: GlobalErrorHandler},
//   ],
// });

// // Usage in consumer app
// // main.ts
// bootstrapApplication(App, {
//   providers: [
//     provideAnalytics({
//       trackingId: 'GA-12345',
//       enableDebugMode: !environment.production,
//     }),
//   ],
// });