import { Component, OnInit } from '@angular/core';
import { config } from '../_config/config';
import { EnvelopeService } from './envelope.service';

@Component({
  selector: 'app-envelope',
  templateUrl: './envelope.component.html',
  styleUrls: ['./envelope.component.css']
})
export class EnvelopeComponent implements OnInit {
  public envelopes = new Array(4);
  public isOpenPlate: boolean = false;
  public envelopeContent: any = {};  

  private envelopeConfiguration: any = config.envelopeConfiguration;
  private countPlatesCategory: any = config.countPlatesCategory;
  private categories: Array<string> = config.categories;

  public onClicEnvelope (): void {
    this.isOpenPlate = !this.isOpenPlate;
  } 

  constructor(
    private envelopeService: EnvelopeService
  ) {
    console.log(this.getEnvelopeContents());
  }

  ngOnInit(): void {
    
  }

  /* TODO: Change the implementation of getting random number to a more secure one
   * Link: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   */
  private getRandomNumber(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private getEnvelopeConfiguration(): any {
    let randomNumber: number = this.getRandomNumber(0, this.envelopeConfiguration.length - 1);
    return this.envelopeConfiguration[randomNumber];
  }

  private getCountPlatesCategory(configuration: any, nameCategory: string): number {
    return configuration[nameCategory];
  }

  private getRandomPlatesPerCategory(nameCategory: string): any {
    let envelopeConfigurationLocal: any = this.getEnvelopeConfiguration();

    let countPlatesCategoryForEnvelope: number = this.getCountPlatesCategory(envelopeConfigurationLocal, nameCategory);
    let countTotalPlatesCategory: number = this.getCountPlatesCategory(this.countPlatesCategory, nameCategory);
    let arrayRandomNumbersForPlatesCategory: Array<number> = [];

    let flag: boolean = true;

    while (flag) {
      if (countPlatesCategoryForEnvelope > 0) {
        let randomNumber = this.getRandomNumber(1, countTotalPlatesCategory);
        if (arrayRandomNumbersForPlatesCategory.indexOf(randomNumber) < 0) {
          arrayRandomNumbersForPlatesCategory.push(randomNumber);
        }

        if (arrayRandomNumbersForPlatesCategory.length >= countPlatesCategoryForEnvelope) {
          flag = false;
        }
      } else {
        flag = false;
      }
    }

    return arrayRandomNumbersForPlatesCategory;
  }

  private getEnvelopeContents () {
    let arrayPlateContent: Array<any> = [];
    for (let index: number = 0; index < this.categories.length; index++) {
      let nameCategory = this.categories[index];
      let arrayIdCategory = this.getRandomPlatesPerCategory(nameCategory);
      for (let indexB: number = 0; indexB < arrayIdCategory.length; indexB++) {
        this.envelopeService.getPlateCategoryById(nameCategory, arrayIdCategory[indexB])
          .subscribe(
            (data: any) => {
              arrayPlateContent.push(data);
            }
          );
      }
    }

    return arrayPlateContent;
  }
}
