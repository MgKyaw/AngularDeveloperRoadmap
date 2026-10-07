// import {Service} from '@angular/core';
// import {toKebabCase} from './kebab-case';

// @Service()
// export class FormatterService {
//   formatSlug(title: string): string {
//     return toKebabCase(title);
//   }
// }

// Avoid this
// import {inject, Service} from '@angular/core';
// import {KebabCasePipe} from './kebab-case.pipe';

// @Service()
// export class FormatterService {
//   // Avoid injecting the pipe class into services or other classes.
//   private kebabCasePipe = inject(KebabCasePipe);

//   formatSlug(title: string): string {
//     return this.kebabCasePipe.transform(title);
//   }
// }