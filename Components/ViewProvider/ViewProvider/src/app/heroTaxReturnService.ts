// import {inject, Service} from '@angular/core';
// import {HeroTaxReturn} from './hero';
// import {HeroesService} from './heroes.service';
// @Service({autoProvided: false})
// export class HeroTaxReturnService {
//   private currentTaxReturn!: HeroTaxReturn;
//   private originalTaxReturn!: HeroTaxReturn;
//   private heroService = inject(HeroesService);
//   set taxReturn(htr: HeroTaxReturn) {
//     this.originalTaxReturn = htr;
//     this.currentTaxReturn = htr.clone();
//   }
//   get taxReturn(): HeroTaxReturn {
//     return this.currentTaxReturn;
//   }
//   restoreTaxReturn() {
//     this.taxReturn = this.originalTaxReturn;
//   }
//   saveTaxReturn() {
//     this.taxReturn = this.currentTaxReturn;
//     this.heroService.saveTaxReturn(this.currentTaxReturn).subscribe();
//   }
// }