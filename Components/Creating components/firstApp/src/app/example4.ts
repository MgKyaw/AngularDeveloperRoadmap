// import {Injectable, Component, inject} from '@angular/core';
// // Base logger
// @Injectable()
// export class Logger {
//   log(message: string) {
//     console.log(message);
//   }
// }
// // Enhanced logger with timestamp
// @Injectable()
// export class BetterLogger extends Logger {
//   override log(message: string) {
//     super.log(`[${new Date().toISOString()}] ${message}`);
//   }
// }
// // Logger that includes user context
// @Injectable()
// export class EvenBetterLogger extends Logger {
//   private userService = inject(UserService);
//   override log(message: string) {
//     const name = this.userService.user.name;
//     super.log(`Message to ${name}: ${message}`);
//   }
// }
// // In your component
// @Component({
//   selector: 'app-example',
//   providers: [
//     UserService, // EvenBetterLogger needs this
//     {provide: Logger, useClass: EvenBetterLogger},
//   ],
// })
// export class Example {
//   private logger = inject(Logger); // Gets EvenBetterLogger instance
// }