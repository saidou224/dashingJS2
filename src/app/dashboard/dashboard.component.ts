import { Component, OnInit } from '@angular/core';
import {GridsterConfig, GridsterItem} from 'angular-gridster2';
import {DashboardGridsterConfigService} from './dashboard-gridster-config.service';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    options: GridsterConfig;
    dashboard: Array<GridsterItem>;

    constructor(private dashboardGridsterConfigService: DashboardGridsterConfigService) { }

    ngOnInit() {
        this.options = this.dashboardGridsterConfigService.getConfig();

        this.dashboard = [
            {cols: 1, rows: 2},
            {cols: 1, rows: 1},
            {cols: 1, rows: 1},
            {cols: 1, rows: 1},
            {cols: 1, rows: 1},
            {cols: 1, rows: 1},
            {cols: 2, rows: 1},
            {cols: 1, rows: 1},
            {cols: 1, rows: 1},
            {cols: 1, rows: 1},
            {cols: 1, rows: 1},
            {cols: 1, rows: 1},
            {cols: 1, rows: 1}
        ];
    }
}
