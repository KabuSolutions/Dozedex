import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class BaseService {
    private url: string = "http://localhost:3000/Sandbox/Timeout?Timeout=3000";
    public showLoading: boolean = false;

    public constructor (private http: HttpClient) {}

    public GetTimeOut(): void {
        this.http.get(this.url).subscribe();
    }

    public hideSplash() {
        this.showLoading = false;
      }
    
    public showSplash() {
        this.showLoading = true;
    }
}
