// @Directive({
//   selector: 'app-interval-dir',
// })
// export class IntervalDirComponent {
//   everySecond = output<string>();
//   everyFiveSeconds = output<string>();
//   constructor() {
//     setInterval(() => this.everySecond.emit('event'), 1000);
//     setInterval(() => this.everyFiveSeconds.emit('event'), 5000);
//   }
// }
// @Component({
//   selector: 'app-my-output',
//   template: `
//     <app-interval-dir (everySecond)="onEverySecond()" (everyFiveSeconds)="onEveryFiveSeconds()" />
//   `,
//   imports: [IntervalDirComponent],
// })
// export class MyOutputComponent {
//   onEverySecond() {
//     console.log('second');
//   }
//   onEveryFiveSeconds() {
//     console.log('five seconds');
//   }
// }