import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { DashboardGridsterConfigService } from './dashboard-gridster-config.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  options: GridsterConfig;
  items: Array<GridsterItem>;

  constructor(private dashboardGridsterConfigService: DashboardGridsterConfigService) {}

  ngOnInit() {
    this.items = environment.dashingJS2.items;
    this.options = this.dashboardGridsterConfigService.getConfig();
  }
}
