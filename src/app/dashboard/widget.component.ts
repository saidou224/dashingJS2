import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { WidgetHostDirective } from './widget-host.directive';
import { WidgetDataInterface, WidgetInterface } from './widget.interface';

@Component({
  selector: 'app-widget',
  template: `<ng-template [appWidgetHost]="data"></ng-template>`,
  styles: [':host { height: 100% }']
})
export class WidgetComponent implements OnInit {
  @Input() data: WidgetDataInterface;
  @ViewChild(WidgetHostDirective) widgetHostDirective: WidgetHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.params.component);
    const componentRef = this.widgetHostDirective.viewContainerRef.createComponent(componentFactory);
    (<WidgetInterface>componentRef.instance).data = this.data;
  }

  ngOnInit() {
    this.loadComponent();
  }
}
