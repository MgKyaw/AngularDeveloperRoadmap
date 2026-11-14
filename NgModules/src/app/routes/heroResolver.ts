// @Injectable({ providedIn: 'root' })
// export class HeroResolver implements Resolve<Hero> {
//   private readonly service = inject(HeroService);

//   resolve(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<Hero>|Promise<Hero>|Hero {
//     return this.service.getHero(route.paramMap.get('id'));
//   }
// }