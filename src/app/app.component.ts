import {Component} from '@angular/core';


@Component(
  {
    selector:'pm-root',
    template:`
      <div>
        <h1>Acm product managment</h1>
        <app-product-list></app-product-list>
      </div>
     
      
    `
  }
)
export class AppComponent {

}
