export interface SearchPaging {
    pageSize : number 
    page     : number
    query    : string
}
export interface Id {
    id : number
}
enum FileType{
    Image , PDF , Video
}
export interface File extends Id{
    url : string ,
    type : FileType
}
export interface Province extends Id{
    name : string 
}
export interface District extends Id{
    name : string 
    province : Province
}
export interface Ward extends Id{
    name : string 
    district : District 
}
export interface Address extends Id{
    ward? : Ward
    district? : District
    province? : Province
    address : string
}

