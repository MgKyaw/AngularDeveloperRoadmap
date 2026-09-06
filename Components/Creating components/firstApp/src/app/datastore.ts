// import {Injectable, Component, inject} from '@angular/core';
// @Injectable({providedIn: 'root'})
// export class DataStore {
//   private data: ListItem[] = [];
// }
// // This component gets its own instance
// @Component({
//   selector: 'app-isolated',
//   // Creates new instance of `DataStore` rather than using the root-provided instance.
//   providers: [DataStore],
//   template: `...`,
// })
// export class Isolated {
//   dataStore = inject(DataStore); // Component-specific instance
// }