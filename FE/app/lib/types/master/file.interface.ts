import {Id} from "@type/master/master"

export enum FileType { "IMAGE" , "PDF" , "VIDEO" }
export interface File extends Id{
    url : string ,
    type : FileType
}
