// {
//  path: 'base'
//  canActivate: [BaseGuard],
//  resolve: {data: BaseDataResolver}
//  children: [
//   {
//     path: 'child',
//     guards: [ChildGuard],
//     component: ChildComponent,
//     resolve: {childData: ChildDataResolver}
//    }
//  ]
// }