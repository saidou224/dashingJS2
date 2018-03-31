import { Directive, Input, ViewContainerRef } from '@angular/core';
import { Dashingjs2GridsterItem } from './interfaces/dashingjs2-gridster-item';

@Directive({
  selector: '[appWidgetHost]'
})
export class WidgetHostDirective {
  private data: Dashingjs2GridsterItem;

  @Input('appWidgetHost')
  set appWidgetHost(data: any) {
    this.data = data;
  }

  constructor(public viewContainerRef: ViewContainerRef) {}
}
