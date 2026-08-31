import {Component} from '@angular/core';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: ` {{ username }} `,
  imports: [],
})
export class App {
  username = 'yOunGTECh';
}
