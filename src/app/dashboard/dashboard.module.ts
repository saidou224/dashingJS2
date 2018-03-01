import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { GridsterModule } from 'angular-gridster2';
import { DashboardGridsterConfigService } from './dashboard-gridster-config.service';
import { WidgetHostDirective } from './widget-host.directive';
import { WidgetHelloWordComponent } from './widgets/widget-hello-word/widget-hello-word.component';
import { WidgetComponent } from './widget.component';
import { WidgetGiphyComponent } from './widgets/widget-giphy/widget-giphy.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, GridsterModule, HttpClientModule],
  declarations: [
    DashboardComponent,
    WidgetHostDirective,
    WidgetHelloWordComponent,
    WidgetComponent,
    WidgetGiphyComponent
  ],
  providers: [DashboardGridsterConfigService],
  entryComponents: [WidgetHelloWordComponent, WidgetGiphyComponent]
})
export class DashboardModule {}
