// import { Directive, ElementRef, inject } from '@angular/core';

// @Directive({
//     selector: '[appHighlight]',
//     host: {
//         '(mouseenter)': 'onMouseEnter()',
//         '(mouseleave)': 'onMouseLeave()',
//     },
// })
// export class HighlightDirective {
//     private el = inject(ElementRef);

//     onMouseEnter() {
//         this.highlight('yellow');
//     }

//     onMouseLeave() {
//         this.highlight('');
//     }

//     private highlight(color: string) {
//         this.el.nativeElement.style.backgroundColor = color;
//     }
// }

// import {Directive, ElementRef, inject, input} from '@angular/core';

// @Directive({
//   selector: '[appHighlight]',
//   host: {
//     '(mouseenter)': 'onMouseEnter()',
//     '(mouseleave)': 'onMouseLeave()',
//   },
// })
// export class HighlightDirective {
//   private el = inject(ElementRef);

//   defaultColor = input('');

//   appHighlight = input('');

//   onMouseEnter() {
//     this.highlight(this.appHighlight() || this.defaultColor() || 'red');
//   }

//   onMouseLeave() {
//     this.highlight('');
//   }

//   private highlight(color: string) {
//     this.el.nativeElement.style.backgroundColor = color;
//   }
// }