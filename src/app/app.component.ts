import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { add } from 'date-fns';
import { takeWhile } from 'rxjs/operators';
import { ClockService } from './_services/clock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  public title_main_container: string = '';
  public date: Date;
  public blocked: boolean;
  
  private subscription$: Subscription;
  

  constructor (
    private clockService: ClockService
  ) {
    
    let path = location.href.split('/')[3];

    if(path === 'album' || path === ''){
      this.title_main_container = 'Mi álbum';
    } else {
      this.title_main_container = "Obtener láminas";
    }
    
    // fecha cualquiera inicializada con dos horas
    this.date = new Date('2000-01-01 00:01:00');
    this.subscription$ = new Subscription();
    this.blocked = false;

    this.clockService.getBlocked().subscribe(
      data => {
        this.blocked = data;
        if (data) {
          this.counter();
        }
      }
    )
    
  }

  ngOnInit(): void {
    
  }

  public onReceiveTitle (event:string) {
    this.title_main_container = event;
  }

  private counter() {
    this.date = new Date('2000-01-01 00:01:00');
    let segundosEnDosHoras = 60;
    
    this.subscription$ = interval(1000)
      .pipe(takeWhile(() => segundosEnDosHoras-- > 0))
      .subscribe({
        next: () => {
          this.date = add(this.date, { seconds: -1 });
        },
        complete: () => this.clockService.setBlocked(false)
      });
  }

  ngOnDestroy() {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }

}
