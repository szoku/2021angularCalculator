import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() value: number;

  constructor() { }

  ngOnInit(): void {
  }

}
