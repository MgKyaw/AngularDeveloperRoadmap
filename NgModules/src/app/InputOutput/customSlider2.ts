// @Component(/* ... */)
// export class CustomSlider {
//   @Input() value = 0;
// }

// <custom-slider [value]="50" />

/// Inline transform

// @Component({
//   selector: 'custom-slider',
//   ...
// })
// export class CustomSlider {
//   @Input({transform: trimString}) label = '';
// }

// function trimString(value: string | undefined) {
//   return value?.trim() ?? '';
// }