import {Id , Tag , File} from "@type/master"
import {Account} from "@type/taikhoan"
import { JobPost  } from "@type/vieclam"
import { NewsPost } from "@type/tintuc"

export type PostCategory = "NEWS" | "REAL_ESTATE" | "JOB" | "FOOD"
export type PostStatus = "PENDING" | "APPROVED" | "HIDDEN" | "DELETED"

export interface Post extends Id {
    title: string
    content?: string
    category: PostCategory
    // user_id : number
    user: Account
    likes_count?: number
    comments_count?: number
    reports_count?: number
    post_image?: File[]
    fb_url?: string
    status: PostStatus
    created_at: Date
    updated_at: Date
    job_post? : JobPost 
    news_post? : NewsPost
    tag? : Tag[]
}