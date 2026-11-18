// class RouterOutlet implements OnDestroy ,OnInit ,RouterOutletContract {
//   @Input() name: string;
//   @Output('activate') activateEvents: EventEmitter<any>;
//   @Output('deactivate') deactivateEvents: EventEmitter<any>;
//   @Output('attach') attachEvents: EventEmitter<unknown>;
//   @Output('detach') detachEvents: EventEmitter<unknown>;
//   readonly routerOutletData = input<unknown>();
//   readonly isActivated: boolean;
//   readonly component: Object;
//   readonly activatedRoute: ActivatedRoute;
//   readonly activatedRouteData: Data;
//   detach(): ComponentRef<any>;
//   attach(ref: ComponentRef<any>, activatedRoute: ActivatedRoute): void;
//   deactivate(): void;
//   activateWith(activatedRoute: ActivatedRoute, environmentInjector: EnvironmentInjector): void;
// }