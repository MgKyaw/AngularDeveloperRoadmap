// import {Component, input, output} from '@angular/core';
// import {HeroTaxReturn} from './hero';
// import {HeroTaxReturnService} from './hero-tax-return.service';
// @Component({
//   selector: 'app-hero-tax-return',
//   templateUrl: './hero-tax-return.html',
//   styleUrls: ['./hero-tax-return.css'],
//   providers: [HeroTaxReturnService],
// })
// export class HeroTaxReturn {
//   message = '';
//   close = output<void>();
//   get taxReturn(): HeroTaxReturn {
//     return this.heroTaxReturnService.taxReturn;
//   }
//   taxReturn = input.required<HeroTaxReturn>();
//   constructor() {
//     effect(() => {
//       this.heroTaxReturnService.taxReturn = this.taxReturn();
//     });
//   }
//   private heroTaxReturnService = inject(HeroTaxReturnService);
//   onCanceled() {
//     this.flashMessage('Canceled');
//     this.heroTaxReturnService.restoreTaxReturn();
//   }
//   onClose() {
//     this.close.emit();
//   }
//   onSaved() {
//     this.flashMessage('Saved');
//     this.heroTaxReturnService.saveTaxReturn();
//   }
//   flashMessage(msg: string) {
//     this.message = msg;
//     setTimeout(() => (this.message = ''), 500);
//   }
// }