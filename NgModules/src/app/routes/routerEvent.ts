// // Get NavigationStart events
// router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(e => {
//   const navigation = router.currentNavigation();
//   tracingService.trace({id: navigation.extras.state.tracingId});
// });