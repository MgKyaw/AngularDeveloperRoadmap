// @Component({
//   selector: "app-root",
//   templateUrl: "./app.component.html",
// })
// export class AppComponent {
//   // code goes here
// }

// @Component({
//   selector: "app-root",
//   template: `<h1>To do application</h1>`,
// })
// export class AppComponent {
//   // code goes here
// }

import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  imports: [CommonModule],
})
export class AppComponent {
  // …
}
