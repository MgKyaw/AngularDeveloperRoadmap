// @Component(/* ... */)
// export class CustomSlider {
//   // Define a model input named "value".
//   value = model(0);

//   increment() {
//     // Update the model input with a new value, propagating the value to any bindings.
//     this.value.update((oldValue) => oldValue + 10);
//   }
// }

// @Component({
//   /* ... */
//   // Using the two-way binding syntax means that any changes to the slider's
//   // value automatically propagate back to the `volume` signal.
//   // Note that this binding uses the signal *instance*, not the signal value.
//   template: `<custom-slider [(value)]="volume" />`,
// })
// export class MediaControls {
//   // Create a writable signal for the `volume` local state.
//   volume = signal(0);
// }