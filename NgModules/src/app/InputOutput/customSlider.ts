// import {Component, input} from '@angular/core';

// @Component(/* ... */)
// export class CustomSlider {
//   // Declare an input named 'value' with a default value of zero.
//   value = input(0);
// }

// @Component(/* ... */)
// export class CustomSlider {
//   // Produces an InputSignal<number | undefined> because `value` may not be set.
//   value = input<number>();
// }

// import {Component, input, computed} from '@angular/core';

// @Component(/* ... */)
// export class CustomSlider {
//   // Declare an input named 'value' with a default value of zero.
//   value = input(0);

//   // Create a computed expression that reads the value input
//   label = computed(() => `The slider's value is ${this.value()}`);
// }

// <custom-slider [value]="50" />


//   // Declare a required input named value. Returns an `InputSignal<number>`.
//   value = input.required<number>();

// @Component({
//   selector: 'custom-slider',
//   /*...*/
// })
// export class CustomSlider {
//   label = input('', {transform: trimString});
// }

// function trimString(value: string | undefined): string {
//   return value?.trim() ?? '';
// }

// <custom-slider [label]="systemVolume" />

// @Component(/* ... */)
// export class CustomSlider {
//   widthPx = input('', {transform: appendPx});
// }

// function appendPx(value: number): string {
//   return `${value}px`;
// }

// Built-in transformation
// import {Component, input, booleanAttribute, numberAttribute} from '@angular/core';

// @Component(/* ... */)
// export class CustomSlider {
//   disabled = input(false, {transform: booleanAttribute});
//   value = input(0, {transform: numberAttribute});
// }