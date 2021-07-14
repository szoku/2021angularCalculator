import { Component } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  currentValue: number;
  previousValue: number;
  previousOp: string;

  constructor() {
    this.currentValue = 0;
    this.previousValue = 0;
    this.previousOp = '';
   }

  newDigit(digit: number) {
    this.currentValue = (this.currentValue * 10 + +digit);
  }

  op(type: string) {
  switch (this.previousOp) {
    case '+':
      this.previousValue = this.previousValue +
      this.currentValue;
      break;
    case '-':
      this.previousValue = this.previousValue -
      this.currentValue;
      break;
    default:
      this.previousValue = this.currentValue;
 }

 switch (type) {
    case '+': {
      this.currentValue = 0;
      this.previousOp = '+';
      break;
    };
    case "-": {
      this.currentValue = 0;
      this.previousOp = '-';
      break;
    };
    case "=": {
      this.currentValue = this.previousValue;
      this.previousOp = '';
      break;
    }
    case "C": {
      this.currentValue = 0;
      this.previousValue = 0;
      this.previousOp = '';
    break;
    }
  }
}
}
