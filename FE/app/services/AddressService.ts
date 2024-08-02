import createApiClient from '@service/ApiService';
import {OptionType} from '@type/anuong'

const apiBaseURL = process.env.API_BASE_URL! || 'http://localhost:8000/api';
const apiClient = createApiClient(apiBaseURL);



class AddressService {
  async getProvinces(): Promise<any> {
    try {
        const response = await apiClient.get('/address/provinces');
        return response.data
    } catch (error) {
        console.log(error);
    }
  }

  async getDistricts(provinceId: Number): Promise<any> {
    try {
      const response = await apiClient.get(`/address/provinces/${provinceId}/districts`);
      return response.data;
    } catch (error) {
      console.error('Error fetching districts:', error);
      throw error;
    }
  }

  async getWards(districtId: Number): Promise<any> {
    try {
      const response = await apiClient.get(`/address/provinces/districts/${districtId}/wards`);
      return response.data; 
    } catch (error) {
      console.error('Error fetching wards:', error);
      throw error;
    }
  }

  async getAllAddresses(): Promise<OptionType[]> {
    try {
      const provinces = await this.getProvinces();
      const provinceOptions: OptionType[] = await Promise.all(
        provinces.map(async (province: any) => {
          const districts = await this.getDistricts(province.id);
          const districtOptions: OptionType[] = await Promise.all(
            districts.map(async (district: any) => {
              const wards = await this.getWards(district.id);
              return {
                value: district.id.toString(),
                label: district.name,
                children: wards.map((ward: any) => ({
                  value: ward.id.toString(),
                  label: ward.name,
                })),
              };
            })
          );
          return {
            value: province.id.toString(),
            label: province.name,
            children: districtOptions,
          };
        })
      );

      return provinceOptions;
    } catch (error) {
      console.error('Error fetching all addresses:', error);
      throw error;
    }
  }
}

export default new AddressService();
