import {File} from "@type/master/file.interface"

export interface Id {
    id: number
}
export type Category = "NEWS" | "REAL_ESTATE" | "JOB" | "FOOD"
export type Status = "Pending" |  "Approved" | "Hidden" | "Deleted"


export interface Post extends Id {
    title: string
    content: string
    category: Category
    likes_count?: number
    comments_count?: number
    reports_count?: number 
    post_image : File[] 
    fb_url? : string
    status : Status
    // news_post : NewsPost
    // job_post : JobPost 
}

