export interface SearchPaging {
    page: number
    size: number
    query?: string
    sort?: string
    order?: string
    category: "NEWS" | "FOOD" | "JOB" | "REAL_ESTATE"
    filter? : Filter
}

// export interface Filter {
//     district_ids?: number[]
//     price_from?: number,
//     price_to?: number
//     career_ids?: number[],
//     experience_ids?: number[],
//     levels?: string[],
//     forms?: string[],
//     salary_from?: number,
//     salary_to?: number
//     tag_ids?: number[]
// }

export interface Filter {
        district_ids?: string[] | null
        price_from?: string | null
        price_to?: string | null
        career_ids?: string | null
        experience_ids?: string[] | null
        levels?: string[] | null
        forms?: string[] | null
        salary_from?: string | null
        salary_to?: string | null
        tag_ids?: string[] | null
    }