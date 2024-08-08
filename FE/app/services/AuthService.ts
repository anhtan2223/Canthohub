import createApiClient from '@service/ApiService';
const apiClient = createApiClient();

import { LoginRequest } from "@type/taikhoan/auth.request"
import { API } from "@config/auth.config"

class AuthService {
    async Login(request: LoginRequest): Promise<any> {
        try {
            const data = await apiClient.post(API.LOGIN , request)
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
    async Refresh(token : string): Promise<any> {
        try {
            const data = await apiClient.post(API.REFRESH , {} , token ) 
            // const data = await apiClient.get("/account/me" , token ) 
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
}
const instance = new AuthService();
export default instance
