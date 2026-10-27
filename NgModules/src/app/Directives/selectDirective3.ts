// // Declare an interface for the template context:
// export interface SelectTemplateContext<T> {
//   $implicit: T;
// }

// @Directive(...)
// export class SelectDirective<T> {
//   // The directive's generic type `T` will be inferred from the `DataSource` type
//   // passed to the input.
//   selectFrom = input.required<DataSource<T>>();

//   // Narrow the type of the context using the generic type of the directive.
//   static ngTemplateContextGuard<T>(dir: SelectDirective<T>, ctx: any): ctx is SelectTemplateContext<T> {
//     // As before the guard body is not used at runtime, and included only to avoid
//     // TypeScript errors.
//     return true;
//   }
// }