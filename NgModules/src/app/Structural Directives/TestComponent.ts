// @Component({
//   selector: 'test-if-has-permission',
//   standalone: true,
//   imports: [IfHasPermissionDirective],
//   template: `
//     <ng-template #falseTemplate>
//       <p>Does not have permission</p>
//     </ng-template>

//     <div *ifHasPermission="'READ'; else falseTemplate">
//       <p>Content that requires read permission</p>
//     </div>

//     <div *ifHasPermission="'CREATE'; else falseTemplate">
//       <p>Content that requires create permission</p>
//     </div>

//     <div *ifHasPermission="'DELETE'">
//       <p>Content that requires delete permission</p>
//     </div>
//   `,
// })
// class TestComponent {
// }