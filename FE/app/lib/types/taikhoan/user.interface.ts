import { Id, File } from "@type/master"

export interface Account extends Id  {
    full_name: string
    // avatar_image_id : number
    avatar_image : File
}
export type Role =  "USER" | "STAFF" | "ADMIN"

export type AccountStatus = "ACTIVE" | "INACTIVE" | "BANNED"

export interface AccountInfo extends Account {
    email: string
    phone: string
    birthdate?: Date
    status: AccountStatus
    role : Role 
}