import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title_main_container: string = '';

  constructor (
    
  ) {
    if(location.href.split('/')[3] === 'album'){
      this.title_main_container = 'Mi álbum';
    } else {
      this.title_main_container = "Obtener láminas";
    }
  }

  public onReceiveTitle (event:string) {
    this.title_main_container = event;
  }

}
