import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ClockService {
  private blocked: BehaviorSubject<boolean>;

  constructor(

  ) {
    this.blocked = new BehaviorSubject<boolean>(false);
  }

  public getBlocked() {
    return this.blocked.asObservable();
  }

  public setBlocked(value: boolean) {
    this.blocked.next(value);
  }
}