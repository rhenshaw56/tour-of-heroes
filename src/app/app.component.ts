import { Component } from '@angular/core';
import {} from './heroes.component';
import { templateJitUrl } from '@angular/compiler';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <heroes></heroes>
        `
})

export class AppComponent {
    title = 'Tour of heroes';
}