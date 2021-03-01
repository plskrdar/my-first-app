import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    showDetails = false;
    clicksCollection = [];

    constructor() {
    }

    toggleDetails() {
        this.showDetails = !this.showDetails;
        this.clicksCollection.push(Date.now());
    }
}
