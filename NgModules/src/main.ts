import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

// import {bootstrapApplication} from '@angular/platform-browser';
// import {EVENT_MANAGER_PLUGINS} from '@angular/platform-browser';
// import {App} from './app';
// import {DebounceEventPlugin} from './debounce-event-plugin';

// bootstrapApplication(App, {
//   providers: [
//     {
//       provide: EVENT_MANAGER_PLUGINS,
//       useClass: DebounceEventPlugin,
//       multi: true,
//     },
//   ],
// });