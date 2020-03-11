import { Component, OnInit, Input } from '@angular/core';
import { Apple } from '../models/apple.model';

@Component({
    selector: 'app-apple-detail',
    templateUrl: './apple-detail.component.html',
    styleUrls: ['./apple-detail.component.scss']
})
export class AppleDetailComponent implements OnInit {
    @Input() apple: Apple;

    constructor() {}

    ngOnInit(): void {}
}
