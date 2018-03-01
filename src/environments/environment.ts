// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { WidgetHelloWordComponent } from '../app/dashboard/widgets/widget-hello-word/widget-hello-word.component';
import { WidgetGiphyComponent } from '../app/dashboard/widgets/widget-giphy/widget-giphy.component';

export const environment = {
  production: false,
  dashingJS2: {
    items: [
      {
        cols: 1,
        rows: 2,
        widgets: [{ component: null, icon: 'fa fa-magic', class: 'bg-primary' }]
      },
      {
        cols: 1,
        rows: 1,
        widgets: [{ component: WidgetHelloWordComponent, icon: 'fa fa-google', class: 'bg-secondary' }]
      },
      {
        cols: 1,
        rows: 1,
        widgets: [{ component: WidgetGiphyComponent, icon: null, class: 'bg-dark', q: 'funny+cat' }]
      },
      {
        cols: 1,
        rows: 1,
        widgets: [{ component: null, icon: 'fi flaticon-youtube', class: 'bg-danger' }]
      },
      {
        cols: 1,
        rows: 1,
        widgets: [{ component: null, icon: null, class: 'bg-warning' }]
      },
      {
        cols: 1,
        rows: 1,
        widgets: [{ component: null, icon: null, class: 'bg-info' }]
      },
      {
        cols: 2,
        rows: 1,
        widgets: [{ component: null, icon: null, class: 'bg-light text-dark' }]
      },
      {
        cols: 1,
        rows: 1,
        widgets: [{ component: null, icon: 'fa fa-bitcoin', class: 'bg-dark' }]
      },
      {
        cols: 1,
        rows: 1,
        widgets: [{ component: null, icon: 'fa fa-download', class: 'bg-white text-dark' }]
      },
      {
        cols: 1,
        rows: 1,
        widgets: [{ component: null, icon: 'fi flaticon-github', class: 'bg-primary' }]
      },
      {
        cols: 1,
        rows: 1,
        widgets: [{ component: null, icon: null, class: 'bg-secondary' }]
      },
      {
        cols: 1,
        rows: 1,
        widgets: [{ component: null, icon: null, class: 'bg-success' }]
      },
      {
        cols: 1,
        rows: 1,
        widgets: [{ component: null, icon: 'fa fa-warning', class: 'bg-danger' }]
      }
    ]
  }
};
