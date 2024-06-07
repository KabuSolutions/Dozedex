import { Injectable } from "@angular/core";
import { IGuild } from "../../Interfaces/Components/Guild/IGuild";
import { BaseService } from "../Base/Base.Service";
import { IGuildService } from "../../Interfaces/Services/Guild/IGuildService";

@Injectable({
    providedIn: 'root'
})

export class GuildService extends BaseService<IGuild> implements IGuildService{
    public override EndPoint: string = "Guild";
}