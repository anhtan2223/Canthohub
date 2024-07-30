export interface SearchPaging {
    page: number
    size: number 
    query?: string 
    sort?: string 
    order?: string 
    category: "NEWS" | "FOOD" | "JOB" | "REAL_ESTATE"
}
