import {Id} from "@type/master/master"

export interface Province extends Id{
    name : string 
}
export interface District extends Id{
    name : string 
}
export interface Ward extends Id{
    name : string 
}
export interface Address extends Id{
    ward? : Ward
    district? : District
    province? : Province
    address : string
}