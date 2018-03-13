// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { Dashingjs2Config } from '../app/dashboard/interfaces/dashingjs2-config';

const dashingjs2Config: Dashingjs2Config = {
  items: [
    { cols: 1, rows: 2, widget: { icon: 'fa fa-magic', class: 'bg-primary' } },
    { cols: 1, rows: 1, widget: { icon: 'fa fa-google', class: 'bg-secondary' } },
    { cols: 1, rows: 1, widget: { icon: null, class: 'bg-success' } },
    { cols: 1, rows: 1, widget: { icon: 'fi flaticon-youtube', class: 'bg-danger' } },
    { cols: 1, rows: 1, widget: { icon: null, class: 'bg-warning' } },
    { cols: 1, rows: 1, widget: { icon: null, class: 'bg-info' } },
    { cols: 2, rows: 1, widget: { icon: null, class: 'bg-light text-dark' } },
    { cols: 1, rows: 1, widget: { icon: 'fa fa-bitcoin', class: 'bg-dark' } },
    { cols: 1, rows: 1, widget: { icon: 'fa fa-download', class: 'bg-white text-dark' } },
    { cols: 1, rows: 1, widget: { icon: 'fi flaticon-github', class: 'bg-primary' } },
    { cols: 1, rows: 1, widget: { icon: null, class: 'bg-secondary' } },
    { cols: 1, rows: 1, widget: { icon: null, class: 'bg-success' } },
    { cols: 1, rows: 1, widget: { icon: 'fa fa-warning', class: 'bg-danger' } }
  ]
};

export const environment = {
  production: false,
  dashingjs2Config: dashingjs2Config
};
