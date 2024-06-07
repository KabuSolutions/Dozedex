import { IBase } from "../../Components/Base/IBase";

export interface IGuild extends IBase{
    Name: string,
    ShortDescription: string,
    LongDescription: string,
    ImageURI: string
}