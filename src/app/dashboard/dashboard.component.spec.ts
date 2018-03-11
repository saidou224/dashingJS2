import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {GridsterModule} from 'angular-gridster2';
import {DashboardGridsterConfigService} from './dashboard-gridster-config.service';
import {DashboardRoutesModule} from './dashboard.routes';
import {CommonModule} from '@angular/common';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule, DashboardRoutesModule, GridsterModule],
        declarations: [DashboardComponent],
        providers: [DashboardGridsterConfigService]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
