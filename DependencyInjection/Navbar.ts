// import {Component, inject} from '@angular/core';
// import {Router} from '@angular/router';
// import {AnalyticsLogger} from './analytics-logger';

// @Component({
//   selector: 'app-navbar',
//   template: `<a href="#" (click)="navigateToDetail($event)">Detail Page</a>`,
// })
// export class Navbar {
//   private router = inject(Router);
//   private analytics = inject(AnalyticsLogger);

//   navigateToDetail(event: Event) {
//     event.preventDefault();
//     this.analytics.trackEvent('navigation', '/details');
//     this.router.navigate(['/details']);
//   }
// }