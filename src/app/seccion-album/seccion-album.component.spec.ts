import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionAlbumComponent } from './seccion-album.component';

describe('SeccionAlbumComponent', () => {
  let component: SeccionAlbumComponent;
  let fixture: ComponentFixture<SeccionAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionAlbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
