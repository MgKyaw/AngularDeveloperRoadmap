// export class AppComponent implements OnInit, OnDestroy {
//   private sub: Subscription | undefined;

//   ngOnInit() {
//     this.sub = this.apiService.getData().subscribe(response => {
//       // handle response
//     });
//   }

//   ngOnDestroy() {
//     if (this.sub) {
//       this.sub.unsubscribe();
//     }
//   }
// }