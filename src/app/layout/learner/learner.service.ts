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
        return this.http.get<LearnerResponse>(Apiurl.apiurl + 'getLearners/232956');
    }

    getSubjects(): Observable<LearnerResponse> {
        return this.http.get<LearnerResponse>(Apiurl.apiurl + 'getSubjects/232956');
    }

    getPrediction(learner: LearnerResponse[]): Observable<LearnerResponse> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Header': 'Content-Type',
                'Content-Type': 'application/json'
            })
        };
        return this.http.post<LearnerResponse>(Apiurl.apiurl + 'getFutureSubjects', learner, httpOptions);
    }
}
