import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.css']
})
export class PlateComponent implements OnInit {
  @Input() public contentPlate: any;

  constructor (

  ) {
    
  }

  ngOnInit () {
           
  }
}
