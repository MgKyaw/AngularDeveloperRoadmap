// // Specialized form component with its own validation service
// @Component({
//   selector: 'app-advanced-form',
//   providers: [
//     FormValidationService, // Each form gets its own validator
//     {provide: FORM_CONFIG, useValue: {strictMode: true}},
//   ],
// })
// export class AdvancedForm {}
// // Modal component with isolated state management
// @Component({
//   selector: 'app-modal',
//   providers: [
//     ModalStateService, // Each modal manages its own state
//   ],
// })
// export class Modal {}