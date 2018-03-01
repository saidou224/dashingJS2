import { Component, Input, OnInit } from '@angular/core';
import { WidgetDataInterface } from '../../widget.interface';

@Component({
  selector: 'app-widget-hello-word',
  template: `
      <p>hello world widget</p>
      <p>c:{{data.item.cols}} r:{{data.item.rows}}</p>
      <p>widget:{{data.params.component}}</p>
  `
})
export class WidgetHelloWordComponent implements OnInit {
  @Input() data: WidgetDataInterface;

  constructor() {}

  ngOnInit() {
    console.log('WidgetHelloWordComponent');
  }
}
