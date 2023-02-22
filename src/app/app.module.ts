import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { AlbumComponent } from './album/album.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { SeccionAlbumComponent } from './seccion-album/seccion-album.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    AlbumComponent,
    ButtonsComponent,
    SeccionAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
