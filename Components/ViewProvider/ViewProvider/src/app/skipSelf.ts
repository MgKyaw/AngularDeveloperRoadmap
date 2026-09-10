// @Component({
//   selector: 'app-skipself',
//   templateUrl: './skipself.html',
//   styleUrls: ['./skipself.css'],
//   // Angular would ignore this LeafService instance
//   providers: [{provide: LeafService, useValue: {emoji: '🍁'}}],
// })
// export class Skipself {
//   // Use skipSelf as inject option
//   public leaf = inject(LeafService, {skipSelf: true});
// }