import { GridsterItem } from 'angular-gridster2';

interface Widget {
  icon: string | null;
  class: string | null;
  component: any;
}

export interface Dashingjs2GridsterItem extends GridsterItem {
  widget: Widget;
}
