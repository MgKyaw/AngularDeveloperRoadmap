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

@Component({
  selector: "app-root",
  standalone: true,
  imports: [],
  template: "<h1>{{ title }}</h1>",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "To do application";
}
