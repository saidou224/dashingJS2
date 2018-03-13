import { Component, OnInit } from '@angular/core';
import { DashboardGridsterConfigService } from './dashboard-gridster-config.service';
import { GridsterConfig } from 'angular-gridster2';
import { environment } from '../../environments/environment';
import { Dashingjs2GridsterItem } from './interfaces/dashingjs2-gridster-item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  config: GridsterConfig;
  items: Array<Dashingjs2GridsterItem>;

  constructor(private dashboardGridsterConfigService: DashboardGridsterConfigService) {}

  ngOnInit() {
    this.config = this.dashboardGridsterConfigService.getConfig();
    this.items = environment.dashingjs2Config.items;
  }
}
