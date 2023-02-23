import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { EnvelopeComponent } from './envelope/envelope.component';

const routes: Routes = [
  {
    path: 'album',
    component: AlbumComponent
  },
  {
    path: 'envelope',
    component: EnvelopeComponent
  },
  {
    path: '',
    redirectTo: 'album',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
