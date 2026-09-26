// @let user = user$ | async;

// @if (user) {
//   <h1>Hello, {{ user.name }}</h1>
//   <user-avatar [photo]="user.photo" />

//   <ul>
//     @for (snack of user.favoriteSnacks; track snack.id) {
//       <li>{{ snack.name }}</li>
//     }
//   </ul>

//   <button (click)="update(user)">Update profile</button>
// }