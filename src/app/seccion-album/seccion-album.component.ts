import { Component, Input, OnInit } from '@angular/core';
import { PlatesStorage } from '../_services/plates-storage.service';

@Component({
  selector: 'seccion-album',
  templateUrl: './seccion-album.component.html',
  styleUrls: ['./seccion-album.component.css']
})
export class SeccionAlbumComponent implements OnInit{
  @Input() public title: string = '';
  @Input() public platesCount: number = 0;

  public arrayPlates: Array<any>;

  constructor(
    private platesStorage: PlatesStorage
  ) {
    this.arrayPlates = [];
  }

  ngOnInit(): void {
    this.arrayPlates = this.platesStorage.getArrayCategory(this.title);
    console.log('arrayPlates', this.arrayPlates);
    
  }
}
