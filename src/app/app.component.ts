import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // templateUrl: './app.component.html',
    template: `
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>{{'Zadanie 1'}}</h1>
                    <hr>
                    <app-success-alert></app-success-alert>
                    <app-warning-alert></app-warning-alert>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
