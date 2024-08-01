import {Id} from "@type/master/master"

export interface Province extends Id{
    name : string 
    slug? : string
}
export interface District extends Id{
    name : string
    slug? : string 
    province_id? : number
}
export interface Ward extends Id{
    name : string 
    slug? : string
    district_id? : number
}
export interface Address extends Id{
    ward? : Ward
    district? : District
    province? : Province
    address : string
}