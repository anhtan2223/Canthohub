import createApiClient from '@service/ApiService';
const apiBaseURL = process.env.API_BASE_URL! || 'http://localhost:8000/api';
const apiClient = createApiClient(apiBaseURL);

import { LoginRequest } from "@type/taikhoan/auth.request"
import { LoginResponse } from "@type/taikhoan/auth.response"
import { API } from "@config/auth.config"

class AuthService {
    async Login(request: LoginRequest): Promise<any> {
        try {
            const response = await apiClient.post(API.LOGIN , request ) as LoginResponse
            return response.data
        } catch (error) {
            return Promise.reject(error)
        }
    }
}
const instance = new AuthService();
export default instance
