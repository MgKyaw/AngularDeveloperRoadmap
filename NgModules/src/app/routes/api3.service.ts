// export class ApiService {
//   constructor(private http: HttpClient) {}

//   getData(endpoint: string): Observable<any> {
//     return this.http.get(endpoint);
//   }

//   updateData(endpoint: string, body: any): Observable<any> {
//     return this.http.put(endpoint, body);
//   }
// }

// constructor(private apiService: ApiService) {}

// ngOnInit() {
//   this.apiService.getData('https://example.com/items').subscribe({
//     next: (res) => console.log('Items:', res),
//     error: (err) => console.error('Error:', err)
//   });
// }

// constructor(private apiService: ApiService) {}

// ngOnInit() {
//   this.apiService.getData('https://example.com/items').subscribe({
//     next: (res) => console.log('Items:', res),
//     error: (err) => console.error('Error:', err)
//   });
// }

// private cache: any = {};

// getCachedData(url: string): Observable<any> {
//   if (this.cache[url]) {
//     return of(this.cache[url]);
//   } else {
//     return this.http.get(url).pipe(
//       tap(data => this.cache[url] = data)
//     );
//   }
// }