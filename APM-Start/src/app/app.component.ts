//Import the component
import {Component} from '@angular/core';

//Define Component Decorator
@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>  
  `
})

//Build the class
export class AppComponent {
  pageTitle: string  = 'Motorcycle Product Management';
}