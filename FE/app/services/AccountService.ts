import createApiClient from '@service/ApiService';
const apiClient = createApiClient();

import { API } from "@config/account.config"

class AuthService {
    async GetMe(token:string): Promise<any> {
        try {
            const data = await apiClient.get(API.GET_ME , token)
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
    
}
const instance = new AuthService();
export default instance
