import { Component } from '@angular/core';
import {} from './heroes.component';
import { templateJitUrl } from '@angular/compiler';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        `,
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
    title = 'Tour of heroes';
}