import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ShowMoreComponent } from './show-more/show-more.component';

@Component({
  selector: 'plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.css']
})
export class PlateComponent implements OnInit {
  @Input() public contentPlate: any;

  constructor (
    private matDialog: MatDialog
  ) {
    
  }

  ngOnInit () {
           
  }

  public onClicShowMore(): void {
    let dialogRef = this.matDialog.open(ShowMoreComponent, {
      data: this.contentPlate
    });
  }
}
