import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { HeroService } from './hero.service';

import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

// router declaration
const RoutingModule = RouterModule.forRoot([
  {
    path: 'heroes',
    component: HeroesComponent
  }
])


@NgModule({
  imports:      [ BrowserModule, FormsModule, RoutingModule ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  providers: [ HeroService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
