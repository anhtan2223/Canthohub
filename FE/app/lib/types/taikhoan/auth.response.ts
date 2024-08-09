import { Response } from "@type/master"
import { AccountInfo } from "@type/taikhoan"

export interface Token {
    access_token: string ,
    token_type: string ,
    expires_in: number
}
export interface RegisterData {
    user : AccountInfo ,
    token : Token
}

export interface LoginResponse extends Response<Token> {}
export interface RegisterResponse extends Response<RegisterData> {}

