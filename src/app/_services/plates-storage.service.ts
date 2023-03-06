import { Injectable } from "@angular/core";
import { config } from "../_config/config";

@Injectable({
  providedIn: "root"
})
export class PlatesStorage {
  private storage: any;

  constructor(

  ) {
    this.storage = {};

    this.buildStorage();
  }

  private getCountPlatesCategory(configuration: any, nameCategory: string): number {
    return configuration[nameCategory];
  }

  private buildStorage(): void {
    config.categories.forEach((nameCategory: string) => {
      const sizeCategory: number = this.getCountPlatesCategory(config.countPlatesCategory, nameCategory);
      this.storage[nameCategory] = new Array();

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
        this.storage[nameCategory].push(element);
      }
    });
  }

  public addPlate(plate: any): void {
    if (this.verifyPlate(plate)) {
      plate['metadata']['isAdded'] = true;
      this.storage[plate.metadata.nameCategory][plate.metadata.numberPlate] = plate;
    }
  }

  public verifyPlate(plate: any): boolean {
    return this.storage[plate.metadata.nameCategory][plate.metadata.numberPlate]['metadata']['isAdded'];
  }

  public getArrayCategory(nameCategory: string) {
    return this.storage[nameCategory];
  }
}