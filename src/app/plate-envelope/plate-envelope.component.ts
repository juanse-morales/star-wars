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
          'min-width': '220px',
          'min-height': '155px',
          border: '2pt solid rgb(112, 161, 163)',
          visibility: 'visible'
        })
      ),
      state(
        'closed',
        style({
          'min-width': '0px',
          'min-height': '0px',
          border: 'none',
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
