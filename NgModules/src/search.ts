// @Component({
//   template: `
//     <input
//       type="text"
//       (input.debounce.500)="onSearch($event.target.value)"
//       placeholder="Search..."
//     />
//   `,
//   ...
// })
// export class Search {
//  onSearch(query: string): void {
//     console.log('Searching for:', query);
//   }
// }