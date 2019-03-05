import {Component, Input, OnChanges, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  ngOnChanges(): void {
    this.starWidth=this.rating *75 /5;
  }
  @Input() rating:number;
  starWidth:number;

  @Output()ratingClicked:EventEmitter<string>=new EventEmitter<string>();

  constructor() { }


  onclick(){
    this.ratingClicked.emit(this.rating +' rating was clicked');
  }



}
