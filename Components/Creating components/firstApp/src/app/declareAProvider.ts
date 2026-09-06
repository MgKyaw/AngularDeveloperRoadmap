import {Component} from '@angular/core';
import {LocalService} from './local-service';
@Component({
  selector: 'app-example',
  providers: [LocalService], // Service without providedIn
})
export class Example {}