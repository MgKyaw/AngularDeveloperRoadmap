import {Service} from '@angular/core';
@Service() // <--provides this service in the root EnvironmentInjector
export class ItemService {
  name = 'telephone';
}