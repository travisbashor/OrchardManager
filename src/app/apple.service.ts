import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apple } from './models/apple.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppleService {
    private _applesUrl = 'api/apples';

    constructor(private _httpClient: HttpClient) {}

    getApples(): Observable<Apple[]> {
        return this._httpClient.get<Apple[]>(this._applesUrl);
    }

    getAppleById(id: number): Observable<Apple> {
        const appleUrl = `${this._applesUrl}/${id}`;

        return this._httpClient.get<Apple>(appleUrl);
    }
}
