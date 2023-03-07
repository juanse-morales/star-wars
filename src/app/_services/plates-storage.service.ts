import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { config } from "../_config/config";

@Injectable({
  providedIn: "root"
})
export class PlatesStorage {
  private storage: BehaviorSubject<any>;
  private platesEnvelope: any;
  private indexEnvelopeSelected: number;
  private platesOpen: any;

  constructor(

  ) {
    this.storage = new BehaviorSubject<any>(this.buildStorage());
    this.indexEnvelopeSelected = 0;
  }

  public getIndexEnvelopeSelected(): number {
    return this.indexEnvelopeSelected;
  }

  public setIndexEnvelopeSelected(value: number): void {
    this.indexEnvelopeSelected = value;
  }

  public getPlatesEnvelope() {
    return this.platesEnvelope;
  }

  public setPlatesEnvelope(value: any) {
    this.platesEnvelope = value;
  }

  public getPlatesOpen() {
    return this.platesOpen;
  }

  public setPlatesOpen(value: any) {
    this.platesOpen = value;
  }

  public getStorageObservable() {
    return this.storage.asObservable();
  }

  private getCountPlatesCategory(configuration: any, nameCategory: string): number {
    return configuration[nameCategory];
  }

  private buildStorage(): any {
    let jsonDefault: any = {};
    config.categories.forEach((nameCategory: string) => {
      const sizeCategory: number = this.getCountPlatesCategory(config.countPlatesCategory, nameCategory);
      jsonDefault[nameCategory] = new Array();

      for (let index = 1; index <= sizeCategory; index++) {
        const element = {
          metadata: {
            isAdded: false,
            isSpecial: false,
            numberPlate: index,
            nameResource: '',
            nameCategory: ''
          }
        };
        jsonDefault[nameCategory].push(element);
      }
    });
    return jsonDefault;
  }

  public addPlate(plate: any): void {
    if (!this.verifyPlate(plate)) {
      plate['metadata']['isAdded'] = true;
      const valueCurrent: any = this.storage.getValue();
      
      valueCurrent[plate.metadata.nameCategory][plate.metadata.numberPlate - 1] = plate;
      this.storage.next(valueCurrent);
    }
  }

  public verifyPlate(plate: any): boolean {
    return this.storage.getValue()[plate.metadata.nameCategory][plate.metadata.numberPlate - 1]['metadata']['isAdded'];
  }
}