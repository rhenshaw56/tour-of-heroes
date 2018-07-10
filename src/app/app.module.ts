import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// {HTTP bit}
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMememoryDataService } from './in-memory-data.service';

import { HeroService } from './hero.service';

import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { RoutingModule } from './modules/app-routing.module';



@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMememoryDataService),
    RoutingModule,
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
export class AppModule {}
