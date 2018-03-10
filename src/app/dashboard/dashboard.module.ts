import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutesModule } from './dashboard.routes';

@NgModule({
  imports: [CommonModule, DashboardRoutesModule],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
