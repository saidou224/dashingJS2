import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {GridsterModule} from 'angular-gridster2';
import {DashboardGridsterConfigService} from './dashboard-gridster-config.service';

@NgModule({
    imports: [
        CommonModule, GridsterModule
    ],
    declarations: [DashboardComponent],
    providers:[DashboardGridsterConfigService]
})
export class DashboardModule { }
