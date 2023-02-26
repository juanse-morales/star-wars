import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateEnvelopeComponent } from './plate-envelope.component';

describe('PlateEnvelopeComponent', () => {
  let component: PlateEnvelopeComponent;
  let fixture: ComponentFixture<PlateEnvelopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlateEnvelopeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlateEnvelopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
