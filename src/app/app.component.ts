import {Component} from '@angular/core';


@Component(
  {
    selector:'pm-root',
    template:`
      <div>
        <h1>Acm product managment</h1>
      </div>
      <app-product-list></app-product-list>
      
    `
  }
)
export class AppComponent {

}
