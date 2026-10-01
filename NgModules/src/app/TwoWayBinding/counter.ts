// import {Component, model} from '@angular/core';

// @Component({
//   selector: 'app-counter',
//   template: `
//     <button (click)="updateCount(-1)">-</button>
//     <span>{{ count() }}</span>
//     <button (click)="updateCount(+1)">+</button>
//   `,
// })
// export class Counter {
//   count = model<number>(0);

//   updateCount(amount: number): void {
//     this.count.update((currentCount) => currentCount + amount);
//   }
// }

// import {Component, model} from '@angular/core';
// @Component({
//   /* Omitted for brevity */
// })
// export class Counter {
//   count = model<number>(0);
//   updateCount(amount: number): void {
//     this.count.update((currentCount) => currentCount + amount);
//   }
// }