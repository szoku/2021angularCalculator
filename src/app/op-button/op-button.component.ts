import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'op-button',
  templateUrl: './op-button.component.html',
  styleUrls: ['./op-button.component.css']
})
export class OpButtonComponent implements OnInit {
  @Input() type: string;
  @Output() opPressed: EventEmitter<string>;

  constructor() {
    this.opPressed = new EventEmitter();
  }

  buttonPressed(): boolean {
   this.opPressed.emit(this.type);
   return false;
  }

  ngOnInit(): void {
  }

}
