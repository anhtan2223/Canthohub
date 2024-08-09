import createApiClient from '@service/ApiService';
const apiClient = createApiClient();

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
