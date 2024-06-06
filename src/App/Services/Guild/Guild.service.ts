import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Observable, map } from "rxjs";
import { IGuild } from "../../Interfaces/Guild/IGuild";

@Injectable({
    providedIn: 'root'
})

export class GuildService {

    private Url: string = `${environment.api}/Guild`;
    private Jwt: string = environment.jwt_token;

    public constructor(private httpClient: HttpClient) {
    }

    GetAll(): Observable<IGuild[]> {
        return this.httpClient.get< {guilds: IGuild[]} >(`${this.Url}/GetAll`).pipe(map(response => response.guilds));
    }
}