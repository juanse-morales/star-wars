import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.css']
})
export class PlateComponent implements OnInit {
  @Input() count: number = 0;

  public arrayPlates: Array<number>;

  constructor (

  ) {
    this.arrayPlates = [];
  }

  ngOnInit () {
    this.arrayPlates = new Array(this.count);
       
  }
}
