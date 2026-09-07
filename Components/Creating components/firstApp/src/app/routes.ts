// // routes.ts
// export const routes: Routes = [
//   {
//     path: 'admin',
//     providers: [
//       AdminService, // Only loaded with admin routes
//       {provide: FEATURE_FLAGS, useValue: {adminMode: true}},
//     ],
//     loadChildren: () => import('./admin/admin.routes'),
//   },
//   {
//     path: 'shop',
//     providers: [
//       ShoppingCartService, // Isolated shopping state
//       PaymentService,
//     ],
//     loadChildren: () => import('./shop/shop.routes'),
//   },
// ];