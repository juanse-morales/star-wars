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
import { TranslateCategoryPipe } from './translate-category.pipe';
import { MatDialogModule } from "@angular/material/dialog";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ShowMoreComponent } from './plate/show-more/show-more.component';
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    AlbumComponent,
    ButtonsComponent,
    SeccionAlbumComponent,
    EnvelopeComponent,
    PlateComponent,
    PlateEnvelopeComponent,
    TranslateCategoryPipe,
    ShowMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
    
    // Angular Material
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ShowMoreComponent
  ]
})
export class AppModule { }
