import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-envelope',
  templateUrl: './envelope.component.html',
  styleUrls: ['./envelope.component.css']
})
export class EnvelopeComponent {
  public envelopes = new Array(4);
  public isOpenPlateOne: boolean = false;
  public isOpenPlateTwo: boolean = false;
  public isOpenPlateThree: boolean = false;
  public isOpenPlateFour: boolean = false;
  public isOpenPlateFive: boolean = false;

  public onClicEnvelope (): void {
    
    this.isOpenPlateOne = !this.isOpenPlateOne;
    setTimeout(() => { this.isOpenPlateTwo = !this.isOpenPlateTwo; }, 600);
    setTimeout(() => { this.isOpenPlateThree = !this.isOpenPlateThree; }, 1200);
    setTimeout(() => { this.isOpenPlateFour = !this.isOpenPlateFour; }, 1800);
    setTimeout(() => { this.isOpenPlateFive = !this.isOpenPlateFive; }, 2400);
  }
}
