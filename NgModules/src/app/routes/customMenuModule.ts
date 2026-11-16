// import {NgModule} from '@angular/core';

// @NgModule({
//   // Metadata goes here
// })
// export class CustomMenuModule {}

// @NgModule({
//   /* ... */
//   // CustomMenu and CustomMenuItem are components.
//   declarations: [CustomMenu, CustomMenuItem],
// })
// export class CustomMenuModule {}

// const MENU_COMPONENTS = [CustomMenu, CustomMenuItem];
// const WIDGETS = [MENU_COMPONENTS, CustomSlider];

// @NgModule({
//   /* ... */
//   // This NgModule declares all of CustomMenu, CustomMenuItem,
//   // CustomSlider, and CustomCheckbox.
//   declarations: [WIDGETS, CustomCheckbox],
// })
// export class CustomMenuModule {}

// @Component({
//   // Mark this component as `standalone: false` so that it can be declared in an NgModule.
//   standalone: false,
//   /* ... */
// })
// export class CustomMenu {
//   /* ... */
// }

// @NgModule({
//   /* ... */
//   // CustomMenu and CustomMenuItem depend on the PopupTrigger and SelectorIndicator components.
//   imports: [PopupTrigger, SelectionIndicator],
//   declarations: [CustomMenu, CustomMenuItem],
// })
// export class CustomMenuModule {}

// @NgModule({
//   imports: [PopupTrigger, SelectionIndicator],
//   declarations: [CustomMenu, CustomMenuItem],

//   // Make CustomMenu and CustomMenuItem available to
//   // components and NgModules that import CustomMenuModule.
//   exports: [CustomMenu, CustomMenuItem],
// })
// export class CustomMenuModule {}

// @NgModule({
//   imports: [PopupTrigger, SelectionIndicator],
//   declarations: [CustomMenu, CustomMenuItem],

//   // Also make PopupTrigger available to any component or NgModule that imports CustomMenuModule.
//   exports: [CustomMenu, CustomMenuItem, PopupTrigger],
// })
// export class CustomMenuModule {}