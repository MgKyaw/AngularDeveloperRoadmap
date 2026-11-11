// providers: [provideRouter(appRoutes, withComponentInputBinding())];

// id = input.required<string>();
// hero = computed(() => this.service.getHero(this.id()));

// id = input.required({
//   transform: (maybeUndefined: string | undefined) => maybeUndefined ?? '0',
// });
// // or
// id = input<string | undefined>();
// internalId = linkedSignal(() => this.id() ?? getDefaultId());

// provideRouter(
//   appRoutes,
//   withComponentInputBinding({
//     queryParams: false,
//     unmatchedInputBehavior: 'undefinedIfStale',
//   }),
// );