import createApiClient from '@service/ApiService';
const apiBaseURL = process.env.API_BASE_URL! || 'http://localhost:8000/api';
const apiClient = createApiClient(apiBaseURL);

class AddressService {
  async getProvinces(): Promise<any> {
    try {
      const data = await apiClient.get('/address/provinces');
      return data
    } catch (error) {
        return Promise.reject(error)
    }
  }

  async getDistricts(provinceId: Number): Promise<any> {
    try {
      const data = await apiClient.get(`/address/provinces/${provinceId}/districts`);
      return data;
    } catch (error) {
        return Promise.reject(error)
    }
  }

  async getWards(districtId: Number): Promise<any> {
    try {
      const data = await apiClient.get(`/address/provinces/districts/${districtId}/wards`);
      return data;
    } catch (error) {
        return Promise.reject(error)
    }
  }

}
const Address = new AddressService();
export default Address;
