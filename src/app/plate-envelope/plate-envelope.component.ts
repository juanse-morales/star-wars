import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { PlatesStorage } from '../_services/plates-storage.service';
import { config } from '../_config/config';

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

  public isAdded: boolean = false;
  public nameCategoryTranslated: string = '';

  constructor (
    private platesStorage: PlatesStorage
  ) {
    
  }

  ngOnInit(): void {
    console.log('contentPlate', this.contentPlate);
    
    this.isAdded = this.platesStorage.verifyPlate(this.contentPlate);
    this.nameCategoryTranslated = this.getTranslateCategory(config.translateCategories, this.contentPlate.metadata.nameCategory);
  }

  private getTranslateCategory(configuration: any, nameCategory: string): string {
    return configuration[nameCategory];
  }

  public onAddPlate (): void {
    this.platesStorage.addPlate(this.contentPlate);
    this.isOpen = !this.isOpen;
    this.isAdded = !this.isAdded;
  }

}
