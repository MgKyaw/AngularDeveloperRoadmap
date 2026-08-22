import {Component} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="/logo.svg" alt="Angular logo" fill />
      </li>
      <li>
        Dynamic Image:
        <img ngSrc="www.example.com/image.png" height="600" width="800" priority />
      </li>
    </ul>
  `,
  imports: [NgOptimizedImage],
})
export class User {
  logoUrl = '/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}
