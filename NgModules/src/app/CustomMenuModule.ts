// const MENU_COMPONENTS = [CustomMenu, CustomMenuItem];
// const WIDGETS = [MENU_COMPONENTS, CustomSlider];
// @NgModule({
//   /* ... */
//   // This NgModule declares all of CustomMenu, CustomMenuItem,
//   // CustomSlider, and CustomCheckbox.
//      imports: [PopupTrigger, SelectionIndicator],
//      declarations: [CustomMenu, CustomMenuItem],
//   standalone: false,
//   // Make CustomMenu and CustomMenuItem available to
//   // components and NgModules that import CustomMenuModule.
//   exports: [CustomMenu, CustomMenuItem],
// // Also make PopupTrigger available to any component or NgModule that imports CustomMenuModule.
//   exports: [CustomMenu, CustomMenuItem, PopupTrigger],
// })
// export class CustomMenuModule {}