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

// <!-- Matches shift and enter -->
// <input type="text" (keyup.shift.enter)="updateField($event)" />

// <!-- Matches alt and left shift -->
// <input type="text" (keydown.code.alt.shiftleft)="updateField($event)" />