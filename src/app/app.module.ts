import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DigitButtonComponent } from './digit-button/digit-button.component';
import { OpButtonComponent } from './op-button/op-button.component';
import { DisplayComponent } from './display/display.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    DigitButtonComponent,
    OpButtonComponent,
    DisplayComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
