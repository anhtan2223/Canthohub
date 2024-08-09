
export interface LoginRequest {
    email: string
    password: string
}
export interface RegisterRequest {
    full_name: string
    phone: string
    birthdate: any
    email: string
    password: string
}
export interface FogetPasswordRequest {
    email: string 
}
export interface CheckTokenRequest extends FogetPasswordRequest {
    token: string
}
export interface ResetPasswordRequest extends CheckTokenRequest{
    password: string
}