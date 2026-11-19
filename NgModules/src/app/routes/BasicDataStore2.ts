// import {inject, Service} from '@angular/core';
// import {AdvancedDataStore} from './advanced-data-store';

// @Service()
// export class BasicDataStore {
//   private advancedDataStore = inject(AdvancedDataStore);
//   private data: string[] = [];

//   addData(item: string): void {
//     this.data.push(item);
//   }

//   getData(): string[] {
//     return [...this.data, ...this.advancedDataStore.getData()];
//   }
// }