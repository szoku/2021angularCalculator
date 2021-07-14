import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'digit-button',
  templateUrl: './digit-button.component.html',
  styleUrls: ['./digit-button.component.css']
})
export class DigitButtonComponent implements OnInit {
  @Input() digit: number;
  @Output() digitPressed: EventEmitter<number>;

  constructor() {
   this.digitPressed = new EventEmitter();
  }

  buttonPressed(): boolean {
   this.digitPressed.emit(this.digit);
   return false;
  }

  ngOnInit(): void {
  }

}
