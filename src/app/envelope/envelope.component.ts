import { Component, OnInit } from '@angular/core';
import { config } from '../_config/config';
import { EnvelopeService } from './envelope.service';
import { firstValueFrom } from 'rxjs';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { ClockService } from '../_services/clock.service';

@Component({
  selector: 'app-envelope',
  templateUrl: './envelope.component.html',
  styleUrls: ['./envelope.component.css']
})
export class EnvelopeComponent implements OnInit {
  public envelopes: Array<any>;
  public envelopePlates: Array<any>;
  public isOpenPlate: boolean;
  public loading: boolean;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public blocked: boolean;

  private counterLoading: number;

  constructor(
    private envelopeService: EnvelopeService,
    private clockService: ClockService
  ) {
    this.isOpenPlate = false;
    this.loading = true;
    this.counterLoading = 0;
    this.envelopes = new Array();
    this.envelopePlates = new Array();
    this.blocked = false;

    this.clockService.getBlocked().subscribe(
      data => this.blocked = data
    )

    this.buildEnvelopes();
  }

  ngOnInit(): void {

  }

  public onClicEnvelope(indexEnvelope: number): void {
    this.blocked = true;
    this.clockService.setBlocked(true);
    this.envelopePlates = this.envelopes[indexEnvelope];
    this.isOpenPlate = !this.isOpenPlate;
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
    let randomNumber: number = this.getRandomNumber(0, config.envelopeConfiguration.length - 1);
    return config.envelopeConfiguration[randomNumber];
  }

  private getCountPlatesCategory(configuration: any, nameCategory: string): number {
    return configuration[nameCategory];
  }

  private getPageForUrl(numberToEvaluate: number): number {
    const countDataPerPage: number = config.countDataPerPage;
    const module = numberToEvaluate % countDataPerPage;
    const quotient = numberToEvaluate / countDataPerPage;
    const result = Math.round(quotient);

    if (module >= 5) {
      return result;
    } else {
      return result + 1;
    }
  }

  private getIndexResult(numberToEvaluate: number): number {
    const countDataPerPage: number = config.countDataPerPage;
    let indexResult: number = numberToEvaluate % countDataPerPage;

    if (indexResult !== 0) {
      indexResult--;
    }

    return indexResult;
  }

  private getRandomPlatesPerCategory(nameCategory: string, envelopeConfiguration: any): Array<number> {
    let countPlatesCategoryForEnvelope: number = this.getCountPlatesCategory(envelopeConfiguration, nameCategory);
    let countTotalPlatesCategory: number = this.getCountPlatesCategory(config.countPlatesCategory, nameCategory);
    let arrayRandomNumbersForPlatesCategory: Array<number> = [];

    while (arrayRandomNumbersForPlatesCategory.length < countPlatesCategoryForEnvelope && countPlatesCategoryForEnvelope > 0) {
      let randomNumber = this.getRandomNumber(1, countTotalPlatesCategory);

      if (arrayRandomNumbersForPlatesCategory.indexOf(randomNumber) < 0) {
        arrayRandomNumbersForPlatesCategory.push(randomNumber);
      }
    }

    return arrayRandomNumbersForPlatesCategory;
  }

  private async getDataFromPage(nameCategory: string, pageNumber: number): Promise<any> {
    return await firstValueFrom(this.envelopeService.getPlateCategoryAll(nameCategory, pageNumber));
  }

  private buildPlateMetaData(nameCategory: string, numberPlate: number, nameResource: string): any {
    let isSpecial: boolean;
    const configurationSpecial: any = config.specialIndexesCategory;
    const countIndexesFirst: number = configurationSpecial[nameCategory];

    if (numberPlate <= countIndexesFirst) {
      isSpecial = true;
    } else {
      isSpecial = false;
    }

    return {
      isSpecial, numberPlate, nameResource, nameCategory
    };
  }

  private buildAnEnvelope(): Array<any> {
    const envelopeConfiguration: any = this.getEnvelopeConfiguration();
    console.log('envelopeConfiguration', envelopeConfiguration);
    let arrayPlatesEnvelope = new Array();


    config.categories.forEach((nameCategory) => {
      const arrayRandomPlates: Array<number> = this.getRandomPlatesPerCategory(nameCategory, envelopeConfiguration);
      arrayRandomPlates.forEach((numberPlate) => {
        this.getDataFromPage(nameCategory, this.getPageForUrl(numberPlate)).then(data => {
          let plate = data.results[this.getIndexResult(numberPlate)];
          let nameResource: string = '';

          if (plate['name'] !== undefined) {
            nameResource = plate['name'];
          } else if (plate['title'] !== undefined) {
            nameResource = plate['title'];
          }

          plate['metadata'] = this.buildPlateMetaData(nameCategory, numberPlate, nameResource);
          arrayPlatesEnvelope.push(plate);
        }).catch(err => console.log(err)).finally(() => {
          this.counterLoading++;
          if (this.counterLoading === (config.numberEnvelope * config.numberPlatesEnvelope)) {
            this.loading = false;
          }
        });
      });
    });

    return arrayPlatesEnvelope;
  }

  private buildEnvelopes(): void {
    for (let index = 0; index < config.numberEnvelope; index++) {
      this.envelopes.push(this.buildAnEnvelope());
    }
  }
}
