import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  
  @Output() public title_main: EventEmitter<string> = new EventEmitter();

  public onSendTitle (title: string): void {
    this.title_main.emit(title);
  }

}
