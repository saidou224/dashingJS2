import { Dashingjs2Config } from '../app/dashboard/interfaces/dashingjs2-config';
import { HelloWorldComponent } from '../app/dashboard/widgets/hello-world/hello-world.component';
import { WidgetGiphyComponent } from '../app/dashboard/widgets/widget-giphy/widget-giphy.component';

const dashingjs2Config: Dashingjs2Config = {
  items: [
    { cols: 1, rows: 2, widget: { component: null, icon: 'fa fa-magic', class: 'bg-primary' } },
    { cols: 1, rows: 1, widget: { component: null, icon: 'fa fa-google', class: 'bg-secondary' } },
    { cols: 1, rows: 1, widget: { component: null, icon: null, class: 'bg-success' } },
    { cols: 1, rows: 1, widget: { component: null, icon: 'fi flaticon-youtube', class: 'bg-danger' } },
    { cols: 1, rows: 1, widget: { component: null, icon: null, class: 'bg-warning' } },
    { cols: 1, rows: 1, widget: { component: HelloWorldComponent, icon: null, class: 'bg-info' } },
    { cols: 2, rows: 1, widget: { component: null, icon: null, class: 'bg-light text-dark' } },
    {
      cols: 1,
      rows: 1,
      widget: { component: WidgetGiphyComponent, params: { q: 'funny goat' }, icon: null, class: 'bg-dark' }
    },
    { cols: 1, rows: 1, widget: { component: null, icon: 'fa fa-download', class: 'bg-white text-dark' } },
    { cols: 1, rows: 1, widget: { component: null, icon: 'fi flaticon-github', class: 'bg-primary' } },
    { cols: 1, rows: 1, widget: { component: null, icon: null, class: 'bg-secondary' } },
    { cols: 1, rows: 1, widget: { component: null, icon: null, class: 'bg-success' } },
    { cols: 1, rows: 1, widget: { component: null, icon: 'fa fa-warning', class: 'bg-danger' } }
  ]
};

export const environment = {
  production: true,
  dashingjs2Config: dashingjs2Config
};
