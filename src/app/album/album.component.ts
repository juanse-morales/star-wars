import { Component } from '@angular/core';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  public titleMovies: string = "Películas";
  public titlePlayers: string = "Personajes";
  public titleShips: string = "Naves";

  public platesCountMovies: number = 6;
  public platesCountPlayers: number = 82;
  public platesCountShips: number = 36;
}
