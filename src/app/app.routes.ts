import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {dashboardRoutes} from './dashboard/dashboard.routes';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                { path: '',
                    redirectTo: '/dashboard',
                    pathMatch: 'full'
                },
                ...dashboardRoutes,
                { path: '**', component: PageNotFoundComponent }
            ]
        )
    ],
    exports: [RouterModule]
})
export class AppRoutesModule {}
