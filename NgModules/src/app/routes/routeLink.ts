// class RouterLink implements OnChanges ,OnDestroy {
//   constructor(router: Router, route: ActivatedRoute, tabIndexAttribute: string | null | undefined, renderer: Renderer2, el: ElementRef<any>, locationStrategy?: LocationStrategy | undefined);
//    get href(): string | null;
//   @Input() get target(): string | undefined;
//   @Input() get queryParams(): Params | null | undefined;
//   @Input() get fragment(): string | undefined;
//   @Input() get queryParamsHandling(): QueryParamsHandling | null | undefined;
//   @Input() get state(): { [k: string]: any; } | undefined;
//   @Input() get info(): unknown;
//   @Input() get relativeTo(): ActivatedRoute | null | undefined;
//   @Input() get preserveFragment(): boolean;
//   @Input() get skipLocationChange(): boolean;
//   @Input() get replaceUrl(): boolean;
//   browserUrl = input<string | UrlTree | undefined>();
//   @Input() set routerLink(value: string | readonly any[] | UrlTree | null | undefined);
//   readonly urlTree: UrlTree | null;
// }