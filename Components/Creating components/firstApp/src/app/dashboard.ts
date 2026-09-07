// // Service that needs runtime configuration
// class ApiClient {
//   constructor(
//     private http: HttpClient,
//     private baseUrl: string,
//     private rateLimitMs: number,
//   ) {}
//   async fetchData(endpoint: string) {
//     // Apply rate limiting based on user tier
//     await this.applyRateLimit();
//     return this.http.get(`${this.baseUrl}/${endpoint}`);
//   }
//   private async applyRateLimit() {
//     // Simplified example - real implementation would track request timing
//     return new Promise((resolve) => setTimeout(resolve, this.rateLimitMs));
//   }
// }
// // Factory function that configures based on user tier
// import {inject} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// const apiClientFactory = () => {
//   const http = inject(HttpClient);
//   const userService = inject(UserService);
//   // Assuming userService provides these values
//   const baseUrl = userService.getApiBaseUrl();
//   const rateLimitMs = userService.getRateLimit();
//   return new ApiClient(http, baseUrl, rateLimitMs);
// };
// // Provider configuration
// export const apiClientProvider = {
//   provide: ApiClient,
//   useFactory: apiClientFactory,
// };
// // Usage in component
// @Component({
//   selector: 'app-dashboard',
//   providers: [apiClientProvider],
// })
// export class Dashboard {
//   private apiClient = inject(ApiClient);
// }