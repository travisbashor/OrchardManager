import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Apple } from './models/apple.model';

@Injectable({
    providedIn: 'root'
})
export class AppleDataService implements InMemoryDbService {
    createDb() {
        const apples: Apple[] = [
            {
                id: 1,
                description: 'Pink Pearl',
                imageName: 'pink-pearl.jpg',
                rateOfGrowth: 5
            },
            {
                id: 2,
                description: 'Ambrosia',
                imageName: 'pink-pearl.jpg',
                rateOfGrowth: 7
            },
            {
                id: 3,
                description: 'Arkansas Black',
                imageName: 'pink-pearl.jpg',
                rateOfGrowth: 3
            },
            {
                id: 4,
                description: 'Winesap',
                imageName: 'pink-pearl.jpg',
                rateOfGrowth: 2
            },
            {
                id: 5,
                description: 'Cortland',
                imageName: 'pink-pearl.jpg',
                rateOfGrowth: 10
            },
            {
                id: 6,
                description: 'Opal',
                imageName: 'pink-pearl.jpg',
                rateOfGrowth: 12
            }
        ];
        return { apples };
    }
}
