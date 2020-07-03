import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: number;
  firstNumber: number;
  secondNumber: number;
  operator = `+`;
  calculators = `Calculator Angular Overview`;
  constructor() {
  }

  // tslint:disable-next-line:typedef
  onChangeFirstNumber(value) {
    this.firstNumber = Number(value);
  }

  // tslint:disable-next-line:typedef
  onChangeSecondName(value) {
    this.secondNumber = Number(value);
  }

  // tslint:disable-next-line:typedef
  onSelectOperator(value) {
    this.operator = value;
  }

  // tslint:disable-next-line:typedef
  calculator() {
    switch (this.operator) {
      case '+':
        this.result = this.firstNumber + this.secondNumber;
        break;
      case '-':
        this.result = this.firstNumber - this.secondNumber;
        break;
      case '*':
        this.result = this.firstNumber * this.secondNumber;
        break;
      case '/':
        this.result = this.firstNumber / this.secondNumber;
        break;
    }
  }

  ngOnInit(): void {
  }

}
