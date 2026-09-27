// @Component({
//   template: `
//     <input type="text" (keyup)="updateField($event)" />
//   `,
//   ...
// })
// export class App {
//   updateField(event: KeyboardEvent): void {
//     if (event.key === 'Enter') {
//       console.log('The user pressed enter in the text field.');
//     }
//   }
// }

// @Component({
//   template: `
//     <input type="text" (keyup.enter)="updateField($event)" />
//   `,
//   ...
// })
// export class App{
//   updateField(event: KeyboardEvent): void {
//     console.log('The user pressed enter in the text field.');
//   }
// }