import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlatesStorage } from '../_services/plates-storage.service';

@Component({
  selector: 'seccion-album',
  templateUrl: './seccion-album.component.html',
  styleUrls: ['./seccion-album.component.css']
})
export class SeccionAlbumComponent implements OnInit {
  @Input() public title: string = '';
  @Input() public platesCount: number = 0;

  public arrayPlates: Array<any>;

  constructor(
    private platesStorage: PlatesStorage
  ) {
    this.arrayPlates = [];
  }

  ngOnInit(): void {
    
    this.platesStorage.getStorageObservable().subscribe(
      (data) => {
        this.arrayPlates = data[this.title];
        //console.log('data', data);
        
      }
    );
  }
}
