// // You can emit primitive values.
// this.valueChanged.emit(7);

// // You can emit custom event objects
// this.thumbDropped.emit({
//   pointerX: 123,
//   pointerY: 456,
// });

// add usage
// <custom-slider (valueChanged)="logValue($event)" />

// Receive the event in the partent component
// @Component({
//  /*...*/
// })
// export class App {
//   logValue(value: number) {
//     ...
//   }
// }