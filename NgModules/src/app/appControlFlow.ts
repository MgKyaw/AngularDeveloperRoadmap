// @Component({
//   template: `
//     @switch (state) {
//       @case ('loggedOut') {
//         <button>Login</button>
//       }

//       @case ('loggedIn') {
//         <p>Welcome back!</p>
//       }

//       @default never;
//       <!-- throws because @case ('loading') is missing -->
//     }
//   `,
// })
// export class AppComponent {
//   state: 'loggedOut' | 'loading' | 'loggedIn' = 'loggedOut';
// }