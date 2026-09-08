// // 📁 /libs/http-client/src/provider.ts
// import {Provider, InjectionToken, inject} from '@angular/core';
// // Feature flags for optional functionality
// export enum HttpFeatures {
//   Interceptors = 'interceptors',
//   Caching = 'caching',
//   Retry = 'retry',
// }
// // Configuration interfaces
// export interface HttpConfig {
//   baseUrl?: string;
//   timeout?: number;
//   headers?: Record<string, string>;
// }
// export interface RetryConfig {
//   maxAttempts: number;
//   delayMs: number;
// }
// // Internal tokens
// const HTTP_CONFIG = new InjectionToken<HttpConfig>('http.config');
// const RETRY_CONFIG = new InjectionToken<RetryConfig>('retry.config');
// const HTTP_FEATURES = new InjectionToken<Set<HttpFeatures>>('http.features');
// // Core service
// class HttpClientService {
//   private config = inject(HTTP_CONFIG, {optional: true});
//   private features = inject(HTTP_FEATURES);
//   get(url: string) {
//     // Use config and check features
//   }
// }
// // Feature services
// class RetryInterceptor {
//   private config = inject(RETRY_CONFIG);
//   // Retry logic
// }
// class CacheInterceptor {
//   // Caching logic
// }
// // Main provider function
// export function provideHttpClient(config?: HttpConfig, ...features: HttpFeature[]): Provider[] {
//   const providers: Provider[] = [
//     {provide: HTTP_CONFIG, useValue: config || {}},
//     {provide: HTTP_FEATURES, useValue: new Set(features.map((f) => f.kind))},
//     HttpClientService,
//   ];
//   // Add feature-specific providers
//   features.forEach((feature) => {
//     providers.push(...feature.providers);
//   });
//   return providers;
// }
// // Feature configuration functions
// export interface HttpFeature {
//   kind: HttpFeatures;
//   providers: Provider[];
// }
// export function withInterceptors(...interceptors: any[]): HttpFeature {
//   return {
//     kind: HttpFeatures.Interceptors,
//     providers: interceptors.map((interceptor) => ({
//       provide: INTERCEPTOR_TOKEN,
//       useClass: interceptor,
//       multi: true,
//     })),
//   };
// }
// export function withCaching(): HttpFeature {
//   return {
//     kind: HttpFeatures.Caching,
//     providers: [CacheInterceptor],
//   };
// }
// export function withRetry(config: RetryConfig): HttpFeature {
//   return {
//     kind: HttpFeatures.Retry,
//     providers: [{provide: RETRY_CONFIG, useValue: config}, RetryInterceptor],
//   };
// }
// // Consumer usage with multiple features
// bootstrapApplication(App, {
//   providers: [
//     provideHttpClient(
//       {baseUrl: 'https://api.example.com'},
//       withInterceptors(AuthInterceptor, LoggingInterceptor),
//       withCaching(),
//       withRetry({maxAttempts: 3, delayMs: 1000}),
//     ),
//   ],
// });