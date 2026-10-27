// import { Directive, inject, Input, TemplateRef } from '@angular/core';
// import { Permission, PermissionsService } from '../permissions.service';
// import { StructuralConditionalDirective } from "../structural-conditional.directive";

// @Directive({
//   selector: '[ifHasPermission]',
//   standalone: true,
// })
// export class IfHasPermissionDirective extends StructuralConditionalDirective {
//   private readonly permissionsService = inject(PermissionsService);

//   @Input('ifHasPermission') set permission(permission: Permission) {
//     this.setCondition(this.permissionsService.hasPermission(permission));
//   }

//   @Input('ifHasPermissionElse') set ifHasPermissionElse(template: TemplateRef<any>) {
//     this.setElseTemplate(template);
//   }
// }