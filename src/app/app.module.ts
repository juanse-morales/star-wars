import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { AlbumComponent } from './album/album.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { SeccionAlbumComponent } from './seccion-album/seccion-album.component';
import { EnvelopeComponent } from './envelope/envelope.component';
import { PlateComponent } from './plate/plate.component';
import { PlateEnvelopeComponent } from './plate-envelope/plate-envelope.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxLoadingModule } from "ngx-loading";

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    AlbumComponent,
    ButtonsComponent,
    SeccionAlbumComponent,
    EnvelopeComponent,
    PlateComponent,
    PlateEnvelopeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
