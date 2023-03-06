import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'plate-envelope',
  templateUrl: './plate-envelope.component.html',
  styleUrls: ['./plate-envelope.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          visibility: 'visible'
        })
      ),
      state(
        'closed',
        style({
          visibility: 'hidden'
        })
      ),
      transition('open => closed', [animate('400ms 0s ease-out')]),
      transition('closed => open', [animate('500ms 0s ease-out')]),
    ]),
  ],
})
export class PlateEnvelopeComponent implements OnInit {
  @Input() public isOpen: boolean = false;
  @Input() public contentPlate: any;

  constructor (

  ) {
    
  }

  ngOnInit(): void {
    console.log('contentPlate', this.contentPlate);
    
  }

}
