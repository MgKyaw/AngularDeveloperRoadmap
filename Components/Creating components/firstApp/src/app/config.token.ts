// 📁 /app/config.token.ts
import {InjectionToken} from '@angular/core';
export interface AppConfig {
  apiUrl: string;
  version: string;
  features: Record<string, boolean>;
}
// Globally available configuration using providedIn
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config', {
  providedIn: 'root',
  factory: () => ({
    apiUrl: 'https://api.example.com',
    version: '1.0.0',
    features: {
      darkMode: true,
      analytics: false,
    },
  }),
});
// // No need to add to providers array - available everywhere!
// @Component({
//   selector: 'app-header',
//   template: `<h1>Version: {{ config.version }}</h1>`,
// })
// export class Header {
//   config = inject(APP_CONFIG); // Automatically available
// }