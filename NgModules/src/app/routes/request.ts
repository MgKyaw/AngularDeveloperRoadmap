// constructor(private http: HttpClient) {}

// getData() {
//   forkJoin({
//     user: this.http.get('https://api.example.com/user/1'),
//     cart: this.http.get('https://api.example.com/user/1/cart')
//   }).subscribe({
//     next: (data: any) => {
//       console.log('User Data:', data.user);
//       console.log('Cart Data:', data.cart);
//     },
//     error: (err) => {
//       console.error('Error in parallel calls:', err);
//     }
//   });
// }