import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Observable, map } from "rxjs";
import { IBaseService } from "../../Interfaces/Services/Base/IBaseService";
import { IBase } from "../../Interfaces/Components/Base/IBase";

@Injectable({
    providedIn: 'root'
})

export abstract class BaseService<T extends IBase> implements IBaseService<T> {

    public Api: string = `${environment.api}`;
    public EndPoint: string = "";

    public constructor(private httpClient: HttpClient) {
    }

    GetAll(): Observable<T[]> {
        return this.httpClient.get<{ Body: T[] }>(`${this.Api}/${this.EndPoint}/GetAll`).pipe(
          map(response => response.Body)
        );
      }

    GetOneById(id: number): Observable<T> {
        return this.httpClient.get<{Body: T}>(`${this.Api}/${this.EndPoint}/GetOne`, {
            params: {ID: id},
        }).pipe(
            map(response => response.Body)
        );
    }

    UpdateOne(body: T): Observable<{ Message: string }> {
        return this.httpClient.put<{ Message: string }>(`${this.Api}/${this.EndPoint}/Update`, body);
    }

    AddOne(body: T): Observable<{ Body: string ,Message: string }> {
        return this.httpClient.post<{ Body: string ,Message: string }>(`${this.Api}/${this.EndPoint}/Add`, body);
    }

    DeleteOne(id: number): Observable<{ Message: string }> {
        return this.httpClient.delete<{ Message: string }>(`${this.Api}/${this.EndPoint}/Delete`, {
            params: {ID: id},
        });
    }
}