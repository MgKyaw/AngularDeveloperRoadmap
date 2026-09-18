// @Component({
//   template: `
//     <!-- Does not necessarily update when `welcomeMessage` changes. -->
//     <p>{{ welcomeMessage }}</p>

//     <p>Your color preference is {{ theme() }}.</p> <!-- Always updates when the value of the `theme` signal changes. -->
//   `
//   ...
// })
// export class App {
//   welcomeMessage = "Welcome, enjoy this app that we built for you";
//   theme = signal('dark');
// }