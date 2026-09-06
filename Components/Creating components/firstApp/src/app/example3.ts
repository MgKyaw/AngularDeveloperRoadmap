// // ❌ This won't work!
// interface DataService {
//   getData(): string[];
// }
// // Interfaces disappear after TypeScript compilation
// @Component({
//   providers: [
//     {provide: DataService, useClass: LocalDataService}, // Error!
//   ],
// })
// export class Example {
//   private dataService = inject(DataService); // Error!
// }
// // ✅ Use InjectionToken instead
// export const DATA_SERVICE_TOKEN = new InjectionToken<DataService>('DataService');
// @Component({
//   providers: [{provide: DATA_SERVICE_TOKEN, useClass: LocalDataService}],
// })
// export class Example {
//   private dataService = inject(DATA_SERVICE_TOKEN); // Works!
// }