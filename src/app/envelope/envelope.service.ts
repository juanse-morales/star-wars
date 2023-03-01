import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "../_config/config";


@Injectable({
  providedIn: 'root'
})
export class EnvelopeService {

  constructor(
    private http: HttpClient
  ) {

  }

  private getUrlCategory(configuration: any, nameCategory: string): string{
    return configuration[nameCategory];
  }

  public getPlateCategoryAll(nameCategory: string, page: number) {
    let url: string = `${this.getUrlCategory(config.serverUrl, nameCategory)}${page}`;
    return this.http.get(url);
  }
}