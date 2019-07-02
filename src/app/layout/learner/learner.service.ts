import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apiurl } from 'src/app/shared/api-url';
import { LearnerResponse } from './learner-response';
@Injectable({
    providedIn: 'root'
})
export class LearnerService {
    constructor(private http: HttpClient) {}

    getData(): Observable<LearnerResponse> {
        return this.http.get<LearnerResponse>(Apiurl.apiurl);
    }
}
