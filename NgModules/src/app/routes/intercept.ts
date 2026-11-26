// intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//   const authReq = req.clone({
//     setHeaders: {
//       Authorization: `Bearer ${this.getToken()}`
//     }
//   });
//   return next.handle(authReq);
// }