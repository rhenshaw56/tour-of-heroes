import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap'

import { HeroService } from './hero.service'
import { Hero } from './hero';




@Component({
    selector: 'hero-detail',
    styles: [`
        button {
            background-color: 'gray';
            background: gray;
            color: 'black' font: '2px bold';
            color: black;
            border-radius: 26%;
            font-size: 17px;
            padding: 10px;
        }
        button {
            padding: 5px 10px;
            text-decoration: none;
            margin-top: 10px;
            display: inline-block;
            background-color: #eee;
            border-radius: 4px;
            cursor: 'pointer';
          }
          button:visited {
            color: #607D8B;
          }
          button:hover {
            color: #039be5;
            background-color: #CFD8DC;
          }
        .detail {
            position: relative;
            left: 40%;
            top: 10%;
        }
        input {
            padding: 5px 10px;
            border-radius: 4px;
            border: '2px bold black';
            text-decoration: none;
        }
    `],
    templateUrl: './hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
    constructor(
        private heroService : HeroService,
        private route : ActivatedRoute,
        private location : Location
    ) {};
    ngOnInit() : void {
        console.log('this ->', this);
        this.route.params
            .switchMap((params: Params) => {
                console.log('params', params);
                return this.heroService.getHero(+params['id'])
            })
            .subscribe(hero => this.hero = hero);
    };
    goBack(): void {
        this.location.back();
    }
    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack())
    }
    @Input() hero: Hero;
    
}