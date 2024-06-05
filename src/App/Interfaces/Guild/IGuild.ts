import { IBase } from "../Base/IBase";

export interface IGuild extends IBase{
    Name: String,
    ShortDescription: String,
    LongDescription: String,
    ImageURI: String
}