// // Define configuration interface
// export interface AppConfig {
//   apiUrl: string;
//   appTitle: string;
//   features: {
//     darkMode: boolean;
//     analytics: boolean;
//   };
// }
// // Create injection token
// export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
// // Define configuration
// const appConfig: AppConfig = {
//   apiUrl: 'https://api.example.com',
//   appTitle: 'My Application',
//   features: {
//     darkMode: true,
//     analytics: false,
//   },
// };
// // Provide in bootstrap
// bootstrapApplication(AppComponent, {
//   providers: [{provide: APP_CONFIG, useValue: appConfig}],
// });
// // Use in component
// @Component({
//   selector: 'app-header',
//   template: `<h1>{{ title }}</h1>`,
// })
// export class Header {
//   private config = inject(APP_CONFIG);
//   title = this.config.appTitle;
// }