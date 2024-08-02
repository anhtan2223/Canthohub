import { Id } from "@type/master"

export interface Tag extends Id {
    name : string ,
    slug? : string 
}