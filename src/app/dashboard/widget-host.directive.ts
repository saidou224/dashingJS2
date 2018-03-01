import { Directive, Input, ViewContainerRef } from '@angular/core';
import { WidgetDataInterface } from './widget.interface';

@Directive({
  selector: '[appWidgetHost]'
})
export class WidgetHostDirective {
  data: WidgetDataInterface;

  @Input('appWidgetHost')
  set appWidgetHost(data: any) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  constructor(public viewContainerRef: ViewContainerRef) {}
}
