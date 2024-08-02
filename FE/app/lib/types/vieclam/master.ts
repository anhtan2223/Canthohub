import { Id , File } from "@type/master"
import { Career } from "@type/vieclam/career.interface"
import { Level } from "@/app/lib/types/vieclam/level.enum"
import { Form } from "@/app/lib/types/vieclam/form.enum"
import { Address } from "@type/master/address.interface"
import { Experience } from "@type/vieclam/experience.interface"

export interface JobPost extends Id {
    company_name: string
    // company_cover_image_id: number
    company_cover_image: File
    quantity?: number
    job_description: string
    requirement?: string
    benefits?: string
    // jd_file_id : number
    jd_file?: File
    salary_from?: number
    salary_to?: number
    apply_date_from?: Date
    apply_date_to?: Date
    // address_id : number
    address: Address
    // career_id : number
    career: Career
    // experience_id : number
    experience: Experience
    level: Level
    form: Form
}
