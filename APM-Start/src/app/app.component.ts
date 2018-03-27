//Import the component
import {Component} from '@angular/core';

//Define Component Decorator
@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
    <div>Chris' First Component</div>
  </div>
  `
})

//Build the class
export class AppComponent {
  pageTitle: string  = 'Acme Product Management';
}