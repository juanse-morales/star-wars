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
      this.storage[nameCategory] = new Array(sizeCategory);
    });
  }

  public addPlate(plate: any): void {
    if (this.verifyPlate(plate)) {
      this.storage[plate.metadata.nameCategory][plate.metadata.numberPlate] = plate;
    }
  }

  public verifyPlate(plate: any): boolean {
    if (this.storage[plate.metadata.nameCategory][plate.metadata.numberPlate] === undefined) {
      return true;
    } else {
      return false;
    }
  }
}