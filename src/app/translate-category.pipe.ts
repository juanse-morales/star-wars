import { Pipe, PipeTransform } from '@angular/core';
import { config } from './_config/config';

@Pipe({
  name: 'translateCategory'
})
export class TranslateCategoryPipe implements PipeTransform {

  private getTranslateCategory(configuration: any, nameCategory: string): string {
    return configuration[nameCategory];
  }

  transform(value: string): string {
    return this.getTranslateCategory(config.translateCategories, value);
  }

}
