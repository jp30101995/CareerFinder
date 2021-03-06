import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apiurl } from 'src/app/shared/api-url';
import { LearnerResponse } from './learner-response';
import { catchError } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class LearnerService {
    constructor(private http: HttpClient) {}

    getLearners(): Observable<LearnerResponse> {
        return this.http.get<LearnerResponse>(Apiurl.apiurl + 'getLearners/4209');
    }

    getSubjects(): Observable<LearnerResponse> {
        return this.http.get<LearnerResponse>(Apiurl.apiurl + 'getSubjects/4209');
    }

    getPrediction(learner: LearnerResponse[]): Observable<LearnerResponse> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return this.http.post<LearnerResponse>(Apiurl.apiurl + 'getFutureSubjects/', learner, httpOptions);
    }
}
