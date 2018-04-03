import { Component, Input, OnInit } from '@angular/core';
import { Dashingjs2GridsterItem } from '../../interfaces/dashingjs2-gridster-item';

@Component({
  selector: 'app-hello-world',
  template: `
      <h4>Hello world!</h4>
  `,
  styles: ['h4{font-size: 2vw}']
})
export class HelloWorldComponent implements OnInit {
  @Input() data: Dashingjs2GridsterItem;

  constructor() {}

  ngOnInit() {}
}
