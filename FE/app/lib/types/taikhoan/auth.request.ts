export interface LoginRequest {
    email: string
    password: string
}
export interface RegisterRequest {
    full_name: string
    email: string
    phone: string
    password: string
    birthdate: string
}
export interface FogetPasswordRequest {
    email: string 
}