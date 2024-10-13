import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class BaseService {
    private url: string = "http://localhost:3000/Sandbox/Timeout?Timeout=3000";

    public constructor (private http: HttpClient) {}

    public GetTimeOut(): Observable<any> {
        return this.http.get(this.url);
    }
}
