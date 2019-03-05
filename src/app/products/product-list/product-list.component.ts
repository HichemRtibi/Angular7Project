import { Component, OnInit } from '@angular/core';
import {Iproduct} from '../iproduct';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  imagewidth:number=50;
  imageMargin:number=2;
  showImage=false;
   _listFilter:string;
  filterProducts:Iproduct[];


  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filterProducts=this.listFilter?this.performFilter(this.listFilter):this.products;
  }

  constructor(private productServices:ProductService) {

    
  }

  ngOnInit() {
   this.products=this.productServices.getProduct();
    this.filterProducts=this.products;
  }
pageTitle :string="productList"
  products:Iproduct[];
  toggleImage():void{
    this.showImage=!this.showImage;
  }
  performFilter(filterBy: string): Iproduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Iproduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message:string):void{
    this.pageTitle='Product List '+message;
  }

}
