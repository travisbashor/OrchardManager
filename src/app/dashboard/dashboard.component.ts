import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Apple } from '../models/apple.model';
import { AppleService } from '../apple.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    apples$: Observable<Apple[]>;

    constructor(private _appleService: AppleService) {}

    ngOnInit(): void {
        this.apples$ = this._appleService.getApples();
    }
}
