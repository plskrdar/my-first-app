import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-success-alert',
    templateUrl: './success-alert.component.html',
    styles: [`
        p {
            color: darkgreen;
        }
    `]

})
export class SuccessAlertComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
