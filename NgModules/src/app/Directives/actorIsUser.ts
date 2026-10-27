// // This directive only renders its template if the actor is a user.
// // You want to assert that within the template, the type of the `actor`
// // expression is narrowed to `User`.
// @Directive(...)
// class ActorIsUser {
//   actor = input<User | Robot>();

//   static ngTemplateGuard_actor(dir: ActorIsUser, expr: User | Robot): expr is User {
//     // The return statement is unnecessary in practice, but included to
//     // prevent TypeScript errors.
//     return true;
//   }
// }