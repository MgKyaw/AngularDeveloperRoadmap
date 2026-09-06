import {Injectable, Component, inject} from '@angular/core';
// Service without providedIn
@Injectable()
export class LocalDataStore {
  private data: string[] = [];
  addData(item: string) {
    this.data.push(item);
  }
}
// Component must provide it
@Component({
  selector: 'app-example',
  // A provider is required here because the `LocalDataStore` service has no providedIn.
  providers: [LocalDataStore],
  template: `...`,
})
export class Example {
  dataStore = inject(LocalDataStore);
}