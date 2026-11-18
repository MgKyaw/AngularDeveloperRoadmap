// import {inject, InjectionToken, Service} from '@angular/core';
// import {ANALYTICS_ENABLED} from './token';

// @Service({
//   factory: () => (inject(ANALYTICS_ENABLED) ? new GoogleAnalytics() : new Analytics()),
// })
// export class Analytics {
//   track(event: string, payload?: Record<string, unknown>) {
//     // No-op by default.
//   }
// }

// class GoogleAnalytics extends Analytics {
//   override track(event: string, payload?: Record<string, unknown>) {
//     // Dispatches an analytics event to Google Analytics
//   }
// }