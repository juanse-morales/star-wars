import { Component } from '@angular/core';
import { config } from '../_config/config';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  public countPlatesCategoryAlbum: any;
  public categoriesAlbum;

  constructor(

  ) {
    this.countPlatesCategoryAlbum = config.countPlatesCategory;
    this.categoriesAlbum = config.categories;
  }
}
