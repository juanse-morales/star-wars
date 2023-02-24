import { Component, Input } from '@angular/core';

@Component({
  selector: 'seccion-album',
  templateUrl: './seccion-album.component.html',
  styleUrls: ['./seccion-album.component.css']
})
export class SeccionAlbumComponent {
  @Input() public title: string = '';
  @Input() public platesCount: number = 0;

}
