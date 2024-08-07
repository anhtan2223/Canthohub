import createApiClient from '@service/ApiService';
const apiBaseURL = process.env.API_BASE_URL! || 'http://localhost:8000/api';
const apiClient = createApiClient(apiBaseURL);
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MjI1ODUyNDksImV4cCI6MTcyMjU4ODg0OSwibmJmIjoxNzIyNTg1MjQ5LCJqdGkiOiI3UFNSSmVRRk9GTmRjNGxmIiwic3ViIjoiMjAzIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.a0xYDDaHOOfUsi2fJR0cGM7tC-1BlDAPkkPnByUc3sU"

import { LoginRequest } from "@type/taikhoan/auth.request"
import { LoginResponse } from "@type/taikhoan/auth.response"
import { API } from "@config/auth.config"

class AuthService {
    async Login(request: LoginRequest): Promise<any> {
        try {
            const response = await apiClient.post(API.LOGIN , request ) as LoginResponse 
            if(!response.success){
                throw Error(response.error?.message)
            }
            return response.data
        } catch (error) {
            return Promise.reject(error)
        }
    }
}

export default new AuthService();
