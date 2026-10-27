// import {Directive, TemplateRef, ViewContainerRef, inject, input} from '@angular/core';

// export interface DataSource<T> {
//   load(): Promise<T>;
// }

// @Directive({
//   selector: '[select]',
// })
// export class SelectDirective {
//   private templateRef = inject(TemplateRef);
//   private viewContainerRef = inject(ViewContainerRef);

//   selectFrom = input.required<DataSource<unknown>>();

//   async ngOnInit() {
//     const data = await this.selectFrom().load();
//     this.viewContainerRef.createEmbeddedView(this.templateRef, {
//       // Create the embedded view with a context object that contains
//       // the data via the key `$implicit`.
//       $implicit: data,
//     });
//   }
// }