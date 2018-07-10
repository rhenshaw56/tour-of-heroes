import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HeroesComponent } from '../heroes.component';
import { HeroDetailComponent } from '../hero-detail.component';
import { DashboardComponent } from '../dashboard.component';


const routes = [
    {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule{}
