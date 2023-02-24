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
    
    let path = location.href.split('/')[3];

    if(path === 'album' || path === ''){
      this.title_main_container = 'Mi álbum';
    } else {
      this.title_main_container = "Obtener láminas";
    }
  }

  public onReceiveTitle (event:string) {
    this.title_main_container = event;
  }

}
