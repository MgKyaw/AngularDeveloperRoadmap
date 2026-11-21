// import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../api.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html'
// })
// export class AppComponent implements OnInit {
//   data: any;

//   constructor(private apiService: ApiService) {}

//   ngOnInit() {
//     this.apiService.getData().subscribe({
//       next: (response) => {
//         this.data = response;
//         console.log('Fetched data:', this.data);
//       },
//       error: (err) => {
//         console.error('Error fetching data:', err);
//       }
//     });
//   }
// }