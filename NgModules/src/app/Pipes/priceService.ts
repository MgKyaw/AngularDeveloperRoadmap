// import {Service, LOCALE_ID, inject} from '@angular/core';
// import {formatNumber} from '@angular/common';

// @Service()
// export class PriceService {
//   private locale = inject(LOCALE_ID);

//   format(value: number) {
//     return formatNumber(value, this.locale, '1.2-2');
//   }
// }

// Avoid this
// import {inject, Service} from '@angular/core';
// import {DecimalPipe} from '@angular/common';

// @Service()
// export class PriceService {
//   private decimalPipe = inject(DecimalPipe);

//   format(value: number) {
//     return this.decimalPipe.transform(value, '1.2-2');
//   }
// }