import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { HeroService } from './hero.service';

import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';

// router declaration
const RoutingModule = RouterModule.forRoot([
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
  }
  {
    path: 'dashboard',
    component: DashboardComponent
  }
])


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  providers: [ HeroService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
